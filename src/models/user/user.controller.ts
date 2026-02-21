import { Request, Response } from "express"
import { auth } from "../../lib/auth"
import { UserServices } from "./user.services"
import { Role } from "../../middleware/auth.middleware"

const updateUser=async(req:Request,res:Response)=>{
    try{

        const session=await auth.api.getSession({
            headers:req.headers as any
        })

        if(!session || session.user.role!==Role.ADMIN){
            return res.status(401).json({
                message:"Unauthorized",
                success:false
            })
        }
        const AdminId=session.user.id

        const {role}=req.body
        const {id}=req.params
        const result= await UserServices.updateUser(id as string,AdminId as string,role)
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

export const UserController={
    updateUser
}