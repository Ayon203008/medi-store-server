import { prisma } from "../../lib/prisma"

const addTocard=async(cartData:any)=>{
    const result = await prisma.categories.create({
        data:cartData
    })
    return result
}

export const cartServices={
    addtoCart:addTocard
}