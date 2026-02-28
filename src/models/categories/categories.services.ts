
import { Request, Response } from "express"
import { prisma } from "../../lib/prisma"

const createCategories = async (categoryData: any) => {

    const result = await prisma.categories.create({
        data: categoryData
    })
    return result
}

const updateCategories = async (id: string, categoryData: any) => {
    const result = await prisma.categories.update({
        where: {
            id: id
        },
        data: categoryData
    })
    return result
}

const deleteCategories = async (id: string) => {
    const result = await prisma.categories.delete({
        where: {
            id: id
        }
    })
    return result
}



const getCategories = async (categoryData: any) => {
    const result = await prisma.categories.findMany() // * fiding all categories
    return result
}



export const CategoriesServices = {
    createCategories,
    getCategories,
    updateCategories,
    deleteCategories
}



