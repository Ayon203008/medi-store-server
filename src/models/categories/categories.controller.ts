import { Request, Response } from "express"
import { CategoriesServices } from "./categories.services"

const createCategories= async (req:Request,res:Response)=>{
    try{        

        const result= await CategoriesServices.createCategories(req.body)
        res.status(200).json({
            message:"Categories created successfully",
            success:true,
            data:result
        })

    }catch(error:any){
        res.status(500).json({
            message:error.message,
            success:false
        })
    }   
}


const getCategories= async (req:Request,res:Response)=>{
    try{        

        const result= await CategoriesServices.getCategories(req.body)
        res.status(200).json({
            message:"Categories fetched successfully",
            success:true,
            data:result
        })

    }catch(error:any){
        res.status(500).json({
            message:error.message,
            success:false
        })
    }   
}

export const CategoriesController={
    createCategories,
    getCategories
}



