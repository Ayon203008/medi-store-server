import { prisma } from "../../lib/prisma"

const createReview = async (reviewData: any, CustomerId: string) => {
    const result = await prisma.reviews.create({
        data: {
            ...reviewData,
            customer_id: CustomerId
        }
    })
    return result
}


const getReviews=async(medicineId:string)=>{
    const result = await prisma.reviews.findMany({
        where:{
            medicine_id:medicineId
        },
        include:{
            Customer :{
                select:{
                    name:true,
                    email:true,
                    image:true
                }
            }
        },
        orderBy:{
            createdAt:"desc"
        }
    })
    return result
}

export const ReviewsServices = {
    createReview,
    getReviews
}