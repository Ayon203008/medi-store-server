import { Request, Response } from "express"
import { UserServices } from "./user.services"


const updateUser=async(req:Request,res:Response)=>{
    try{
        const {role,status}=req.body
        const {id}=req.params
        const result= await UserServices.updateUser(id as string,role,status as string)
        res.status(200).json({
            message:"User updated successfully",
            success:true,
            data:result
        })
    }catch(err:any){
        res.status(500).json({
            message:"User update failed",
            success:false,
            error:err.message
        })
    }
}

const getAllUser=async(req:Request,res:Response)=>{
    try{
        const result = await UserServices.getAllUser()
        res.status(200).json({
            message:"All users fetched successfully",
            success:true,
            data:result
        })

    }catch(err:any){
        res.status(500).json({
            message:"cant get all users",
            success:false,
            error:err.message
        })
    }
}

export const UserController={
    updateUser,
    getAllUser
}