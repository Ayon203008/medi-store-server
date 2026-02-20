// post medicine
// get all medicines
// get medicine by id
// update medicine
// delete medicine

import { Router } from "express";
import { MedicineController } from "./Medicine.controller";

const router = Router()

router.post('/add-medicine',MedicineController.createMedicine)

export const medicineRouter: Router = router