import { prisma } from "../../lib/prisma"

const createMedicine = async (medeicineData: any) => {
    const result = await prisma.medicines.create({
        data: medeicineData
    })
    return result

}


const getAllMedicine = async () => {
    const result = await prisma.medicines.findMany()
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

const deleteMedicine=async(id:string)=>{
    const result = await prisma.medicines.delete({
        where:{
            id:id
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


