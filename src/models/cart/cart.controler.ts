import { Request, Response, response } from "express";
import { cartServices } from "./cart.services";

const addtoCart=async(req:Request,res:Response)=>{
    try{
        const result = await cartServices.addtoCart(req.body)
        res.status(200).json({
            message:"Product added to cart successfully",
            success:true,
            data:result
        })

    }catch(err:any){
        res.status(500).json({
            message:err.message,
            success:false
        })
    }
}

export const cartController={
    addtoCart
}