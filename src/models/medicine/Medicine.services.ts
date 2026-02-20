import { prisma } from "../../lib/prisma"

const createMedicine = async (medeicineData: any) => {
    const result = await prisma.medicines.create({
        data: medeicineData
    })
    return result

}


export const medicineServices = {
    createMedicine
}


