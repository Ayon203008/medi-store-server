import { prisma } from "../../lib/prisma"

const createReview = async (reviewData: any, customerId: string) => {
    const result = await prisma.reviews.create({
        data: {
            ...reviewData,
            customer_id: customerId
        }
    })
    return result
}



const deleteReview = async (id: string) => {
    const result = await prisma.reviews.delete({
        where: {
            id: id
        }
    })
    return result
}

const updateReview = async (id: string, updateData: any) => {
    const result = await prisma.reviews.update({
        where: {
            id: id
        },
        data: updateData
    })
    return result
}

export const ReviewsServices = {
    createReview,
    deleteReview,
    updateReview
}