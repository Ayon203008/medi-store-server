import { Request, Response } from "express"
import { ReviewsServices } from "./reviews.services"


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

const getReviews = async (req: Request, res: Response) => {
    try {
        const { medicineId } = req.params
        const result = await ReviewsServices.getReviews(medicineId as string)
        res.status(200).json({
            message: "Review fetched successfully",
            success: true,
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            message: "Review fetch failed",
            success: false,
            error: err.message
        })
    }
}

export const ReviewsController = {
    createReview,
    getReviews
   
}
