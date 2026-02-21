
import { Request, Response } from "express";
import { orderServices } from "./orders.services";
import { auth } from "../../lib/auth";
import { Role } from "../../middleware/auth.middleware";


// * Orders created by the customer 
const createOrders = async (req: Request, res: Response) => {
    try {
        const session = await auth.api.getSession({
            headers: req.headers as any
        })
        if (!session) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }

        const customerId = req.user?.id
        const result = await orderServices.createOrder(req.body, customerId as string)
        res.status(201).json({
            success: true,
            data: result,
            message: "Order created Successfully"
        })

    } catch (err) {
        res.status(500).json({
            message: "Error creating order",
            success: false
        })
    }
}


const getCustomerOrders = async (req: Request, res: Response) => {
    try {
        const session = await auth.api.getSession({
            headers: req.headers as any
        })
        if (!session) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
        const CustomerId = req.user?.id
        const result = await orderServices.getCustomerOrders(CustomerId as string)
        res.status(201).json({
            success: true,
            data: result,
            message: "Order get Successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to get the order",
            success: false
        })
    }
}

const getSellerOrders = async (req: Request, res: Response) => {
    try {

        const session = await auth.api.getSession({
            headers: req.headers as any
        })
        if (!session || session.user.role === Role.SELLER) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
       const sellerId = req.user?.id
        const result = await orderServices.getSelleOrders(sellerId as string)
        res.status(201).json({
            success: true,
            data: result,
            message: "Order get Successfully"
        })
    } catch (err: any) {
        res.status(500).json({
            message: "Failed to get the order",
            success: false
        })
    }
}


const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrder()
        res.status(201).json({
            success: true,
            data: result,
            message: "Order get Successfully"
        })

        if(!result || result.length===0){
           return res.status(201).json({
                success: true,
                message: "Orders are empty"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: "Failed to get the order",
            success: false
        })
    }
}


const getOrdersById = async (req: Request, res: Response) => {
    try {
        const session = await auth.api.getSession({
            headers: req.headers as any
        })
        if (!session) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
        const CustomerId = req.user?.id

        const result = await orderServices.getOrderById(CustomerId as string)
        res.status(201).json({
            success: true,
            data: result,
            message: "Order get Successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to get the order",
            success: false
        })
    }
}




export const orderController = {
    createOrders,
    getAllOrders,
    getSellerOrders,
    getOrdersById,
    getCustomerOrders
}