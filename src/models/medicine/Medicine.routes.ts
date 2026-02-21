
import { Router } from "express";
import { MedicineController } from "./Medicine.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router = Router()

// * only admin and seller can create medicine 

router.post('/',AuthMiddleware(Role.SELLER,Role.ADMIN),MedicineController.createMedicine)

router.get('/',MedicineController.getAllMedicine)

router.get('/:id',MedicineController.getMedicineById)

router.put('/:id',MedicineController.updateMedicine)

router.delete('/:id',MedicineController.deleteMedicine)

export const medicineRouter: Router = router

