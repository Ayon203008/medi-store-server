import { Request, Response } from "express"
import { ReviewsServices } from "./reviews.services"
import { auth } from "../../lib/auth"
import { Role } from "../../middleware/auth.middleware"

const createReview = async (req: Request, res: Response) => {
    try {
        const CustomerId=req.user?.id
       
    
        const result = await ReviewsServices.createReview(req.body,CustomerId as string)
        res.status(200).json({
            message: "Review inserted successfully",
            success: true,
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            message: "Review insertion failed",
            success: false,
            error: err.message
        })
    }
}

const deleteReview = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const result = await ReviewsServices.deleteReview(id as string)
        res.status(200).json({
            message: "Review deleted successfully",
            success: true,
            data: result
        })

    } catch (err: any) {
        res.status(500).json({
            message: "Review deletion failed",
            success: false,
            error: err.message
        })
    }
}

const updateReview=async(req:Request,res:Response)=>{
    try{
        const {id}=req.params
        const result= await ReviewsServices.updateReview(id as string,req.body)
        res.status(200).json({
            message:"Review updated successfully",
            success:true,
            data:result
        })
    }catch(err:any){
        res.status(500).json({
            message:"Review update failed",
            success:false,
            error:err.message
        })
    }
}



export const ReviewsController = {
    createReview,
    deleteReview,
    updateReview
}
