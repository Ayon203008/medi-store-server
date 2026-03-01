import { prisma } from "../../lib/prisma"

const addTocart=async(cartData:any,CustomerId:string)=>{
    const result = await prisma.cart.create({
        data:{
            ...cartData,
            Customer_id:CustomerId
        }
    })
    return result
}

const getAllCart=async(CustomerId:string)=>{
    const result = await prisma.cart.findMany({
        where:{
            Customer_id:CustomerId
        },
        include:{
            Medicine:true
        }
    })
    return result
}


const deleteCart=async(id:string)=>{
    const result = await prisma.cart.delete({
        where:{
            id:id
        }
    })
    return result
}


export const cartServices={
    addTocart,
    deleteCart,
    getAllCart
}