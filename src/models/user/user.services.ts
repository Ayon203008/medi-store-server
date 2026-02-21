import { prisma } from "../../lib/prisma"

const updateUser=async(id:string,AdminId:string,role:any)=>{
    const result=await prisma.user.update({
        where:{
            id:id,
        },
        data:{
            role:role
        } 
    })
    return result;
}

export const UserServices={
    updateUser
}