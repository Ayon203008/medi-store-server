
import { Request, Response } from "express"
import { prisma } from "../../lib/prisma"

const createCategories= async (categoryData:any)=>{

    const result= await prisma.categories.create({
        data:categoryData
    })
    return result
}

const getCategories= async (categoryData:any)=>{

    const result= await prisma.categories.findMany() // * fiding all categories
    return result

}



export const CategoriesServices={
    createCategories,
    getCategories
}



