// post medicine
// get all medicines
// get medicine by id
// update medicine
// delete medicine

import { Router } from "express";
import { MedicineController } from "./Medicine.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router = Router()

// * only admin and seller can create medicine 

router.post('/medicine',AuthMiddleware(Role.SELLER,Role.ADMIN),MedicineController.createMedicine)

export const medicineRouter: Router = router

