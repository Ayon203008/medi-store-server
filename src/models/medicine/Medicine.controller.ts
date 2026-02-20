
import { Request, Response } from "express"
import { medicineServices } from "./Medicine.services"

const createMedicine =async (req:Request, res:Response) => {
    try {
        const result = await medicineServices.createMedicine(req.body)
        res.status(200).json({
            message:"Medicine inserted successfully",
            success:true,
            data:result
        })
        
    } catch (error:any) {
        res.status(500).json({
            message:"Medcine insertion failed",
            success:false,
            error:error.message
        })
    }
}



export const MedicineController = { createMedicine}
