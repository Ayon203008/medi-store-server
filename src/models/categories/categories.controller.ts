import { Request, Response } from "express"
import { CategoriesServices } from "./categories.services"

// * admin only
const createCategories = async (req: Request, res: Response) => {
    try {
        const result = await CategoriesServices.createCategories(req.body)
        res.status(200).json({
            message: "Categories created successfully",
            success: true,
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}
// * Public
const getCategories = async (req: Request, res: Response) => {
    try {
        const result = await CategoriesServices.getCategories(req.body)
        if (!result || result.length === 0) {
            return res.status(200).json({
                message: "No categories found",
                success: false
            })
        }

        res.status(200).json({
            message: "Categories fetched successfully",
            success: true,
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
}

// * admin only
const UpdateCategories = async (req: Request, res: Response) => {
    try {
        const {id}=req.params
       const result= await CategoriesServices.updateCategories(req.body,id as string)
        res.status(200).json({
            message: "Category updated successfully",
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

// * admin only

const deleteCategories=async(req:Request,res:Response)=>{
    try{

        const {id}=req.params
        const result= await CategoriesServices.deleteCategories(id as string)
        res.status(200).json({
            message:"Category deleted successfully",
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

export const CategoriesController = {
    createCategories,
    getCategories,
    UpdateCategories,
    deleteCategories
}



