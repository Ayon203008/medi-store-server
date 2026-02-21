import { prisma } from "../../lib/prisma"


const createOrder=async(orderData:any,customerId:string)=>{

    const medicine= await prisma.medicines.findUnique({
        where:{
            id:orderData.medicine_id
        }
    })

    if(!medicine){
        throw new Error("Medicine not found")
    }

    if(medicine.stock<orderData.quantity){
        throw new Error("Out of stock")
    }

    const result = await prisma.orders.create({
        data:{
            quantity:orderData.quantity,
            paymentMethod:orderData.paymentMethod,
            Customer_id:customerId,
            Medicine_id:orderData.medicine_id,
            TotalPrice:medicine.price*orderData.quantity,
            Seller_id:medicine.Seller_id,
            status:"PENDING" ,
            shippingAddress:orderData.shippingAddress  
        }
    })

    return result
}

const getCustomerOrders=async(customerId:string)=>{

    const result= await prisma.orders.findMany({
        where:{
            Customer_id:customerId
        }
    })
    return result
}

const getSelleOrders=async(sellerId:string)=>{

    const result = await prisma.orders.findMany({
        where:{
            Seller_id:sellerId
        }
    })
    return result
}

const getAllOrder=async()=>{
    const result= await prisma.orders.findMany()
    return result
}

const getOrderById=async(CustomerId:string)=>{
    const result= await prisma.orders.findUnique({
        where:{
            id:CustomerId
        }
    })
    return result
}

export const  orderServices={
    createOrder,
    getCustomerOrders,
    getAllOrder,
    getOrderById,
    getSelleOrders
}