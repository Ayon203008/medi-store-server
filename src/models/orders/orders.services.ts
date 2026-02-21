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

    await prisma.medicines.update({
        where: {
            id: orderData.medicine_id
        },
        data: {
            stock: {
                decrement: orderData.quantity 
            }
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


const getOrderById=async(CustomerId:string,id:string)=>{
    const result= await prisma.orders.findMany({
        where:{
            id:id,
            Customer_id:CustomerId 
        },
        include:{
            Medicine:true
        }
    })
    return result
}

const UpdateOrders=async(SellerId:string,status:any,id:string)=>{
    const result = await prisma.orders.update({
        where:{
            id:id,
            Seller_id:SellerId
        },
        data:{
            status:status
        }
    })
    return result
}

export const  orderServices={
    createOrder,
    getCustomerOrders,
    getOrderById,
    getSelleOrders,
    UpdateOrders
}