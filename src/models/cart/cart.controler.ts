import { Request, Response, response } from "express";
import { cartServices } from "./cart.services";


const addtoCart = async (req: Request, res: Response) => {
    try {

        const CustomerId = req.user?.id
        const result = await cartServices.addTocart(req.body,CustomerId as string)
        res.status(200).json({
            message: "Product added to cart successfully",
            success: true,
            data: result
        })

    } catch (err: any) {
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const deleteCart = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await cartServices.deleteCart(id as string)
        res.status(200).json({
            message: "Product deleted from cart successfully",
            success: true,
            data: result
        })

    } catch (err: any) {
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

const getALlCart = async (req: Request, res: Response) => {
    try {
        const CustomerId = req.user?.id
        const result = await cartServices.getAllCart(CustomerId as string)
        res.status(200).json({
            message: "All cart fetched successfully",
            success: true,
            data: result
        })
    }
    catch (err: any) {
        console.log("Add to cart error", err)
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}


export const cartController = {
    addtoCart,
    deleteCart,
    getALlCart
}