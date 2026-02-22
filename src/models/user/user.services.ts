import { role } from "better-auth/plugins";
import { prisma } from "../../lib/prisma"

const updateUser=async(id:string,role:any,status:any)=>{
    const result=await prisma.user.update({
        where:{
            id:id,
        },
        data:{
            role:role,
            status:status
        } 
    })
    return result;
}

const getAllUser=async()=>{
    const result = await prisma.user.findMany({
        where:{
            OR:[
                {role:"SELLER"},
                {role:"CUSTOMER"}
            ]
        }
    })
    return result;
}

export const UserServices={
    updateUser,
    getAllUser
}


