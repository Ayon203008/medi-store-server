import { includes } from "better-auth"
import { prisma } from "../../lib/prisma"

const createMedicine = async (medeicineData: any, sellerId: string) => {
    const result = await prisma.medicines.create({
        data: {
            ...medeicineData,
            Seller_id: sellerId
        },
        include: {
            Category: {
                select: {
                    name: true,
                    description: true
                }
            },
            Seller: {
                select: {
                    name: true,
                    email: true,
                    id: true
                }
            }
        }
    })
    return result

}


const getAllMedicine = async (query: any) => {

    const { name, manufacturer, category, minPrice, maxPrice } = query // * filtering mechanism

    const filter: any = {}
    if (name) {
        filter.name = { contains: name, mode: "insensitive" }
    }

    if (manufacturer) {
        filter.manufacturer = { contains: manufacturer, mode: "insensitive" }
    }

    if (category) {
        filter.category = { contains: category, mode: "insensitive" }
    }

    if (minPrice || maxPrice) {
        filter.price = {}
        if (minPrice) filter.price.gte = parseFloat(minPrice) // * gte = greater than or equal
        if (maxPrice) filter.price.lte = parseFloat(maxPrice) // * lte = less than or equal
    }

    const result = await prisma.medicines.findMany({
        where: filter,
        include: {
            Category: {
                select: {
                    name: true,
                    description: true
                }
            },
            Seller: {
                select: {
                    name: true,
                    email: true,
                    id: true
                }
            }
        }
    })
    return result
}

const getMedicineById = async (id: string) => {
    const result = await prisma.medicines.findUnique({
        where: {
            id: id
        },
        // * if you want to show the catgeory or seller data
        include: {
            Category: true,
            Seller: true
        }
    })
    return result
}

const updateMedicine = async (id: string, updateData: any) => {
    const result = await prisma.medicines.update({
        where: {
            id: id
        },
        data: updateData
    })
    return result
}



const deleteMedicine = async (id: string) => {
    const result = await prisma.medicines.delete({
        where: {
            id: id
        }
    })
    return result
}


export const medicineServices = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine
}


