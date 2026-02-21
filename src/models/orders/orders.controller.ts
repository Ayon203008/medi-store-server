
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

       
        const customerId = session.user.id

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
         if (!session || session.user.role !== Role.CUSTOMER) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
        const CustomerId = session.user.id
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
        if (!session || session.user.role !== Role.SELLER) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
       const sellerId =session.user.id
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
const getOrdersById = async (req: Request, res: Response) => {
    try {
        const session = await auth.api.getSession({
            headers: req.headers as any
        })
        if (!session || session.user.role !== Role.CUSTOMER) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            })
        }
        const CustomerId = session.user.id
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
    getSellerOrders,
    getOrdersById,
    getCustomerOrders
}