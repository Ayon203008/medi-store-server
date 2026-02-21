import { prisma } from "../../lib/prisma"

const createOrder=async(orderData:any)=>{
    const result= await prisma.orders.create({
        data:orderData
    })
    return result
}

const getAllOrder=async()=>{
    const result= await prisma.orders.findMany()
    return result
}

const getOrderById=async(id:string)=>{
    const result= await prisma.orders.findUnique({
        where:{
            id:id
        }
    })
    return result
}


export const  orderServices={
    createOrder,
    getAllOrder,
    getOrderById
}