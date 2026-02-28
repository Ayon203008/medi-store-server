
import { Request, Response } from "express"
import { medicineServices } from "./Medicine.services"

const createMedicine = async (req: Request, res: Response) => {
    try {

        const sellerId =req.user?.id

        if(!sellerId){
            return res.status(401).json({
                message:"UNauthorized",
                success:false
            })
        }

        const result = await medicineServices.createMedicine(req.body,sellerId as string)
        res.status(200).json({
            message: "Medicine inserted successfully",
            success: true,
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            message: "Medcine insertion failed",
            success: false,
            error: error.message
        })
    }
}
const getAllMedicine = async (req: Request, res: Response) => {
    try {
        const query=req.query   // * Sending qureies to the services
        const result = await medicineServices.getAllMedicine(query)

        if( !result ||result.length===0){
            return res.status(200).json({
                message: "No medicine found",
                success: false
            })
        }

        res.status(200).json({
            message: "Medicine fetched successfully",
            success: true,
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            message: "Medicine fetched failed",
            success: false,
            error: error.message
        })
    }
}

const getMedicineById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await medicineServices.getMedicineById(id as string)

        res.status(200).json({
            message: "Medicine fetched successfully",
            success: true,
            data: result
        })

    } catch (err: any) {
        res.status(500).json({
            message: "Medicine fetched failed",
            success: false,
            error: err.message
        })
    }
}

const updateMedicine = async (req: Request, res: Response) => {
    try {
        const {id}=req.params
        const result= await medicineServices.updateMedicine(id as string,req.body)

        res.status(200).json({
            message: "Medicine updated successfully",
            success: true,
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            message: "Medicine update failed",
            success: false,
            error: err.message
        })
    }
}

const deleteMedicine = async (req: Request, res: Response) => {
    try {
        const {id}=req.params
        const result= await medicineServices.deleteMedicine(id as string)

        res.status(200).json({
            message: "Medicine deleted successfully",
            success: true,
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            message: "Delete failed",
            success: false,
            error: err.message
        })
    }
}

export const MedicineController = {
    createMedicine,
    getAllMedicine,
    getMedicineById,
    updateMedicine,
    deleteMedicine
}
