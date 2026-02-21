
import { Request, Response } from "express";
import { orderServices } from "./orders.services";


const createOrders = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.createOrder(req.body)
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

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrder()
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


const getOrdersById = async (req: Request, res: Response) => {
    try {
        const {id}=req.params
        const result = await orderServices.getOrderById(id as string)
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
    getOrdersById
}