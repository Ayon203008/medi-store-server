
import { Router } from "express";
import { MedicineController } from "./Medicine.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router = Router()


router.post('/',AuthMiddleware(Role.SELLER),MedicineController.createMedicine)

// * public
router.get('/',MedicineController.getAllMedicine)
// * public
router.get('/:id',MedicineController.getMedicineById)

router.patch('/:id',AuthMiddleware(Role.SELLER),MedicineController.updateMedicine)

router.delete('/:id',AuthMiddleware(Role.SELLER,Role.ADMIN),MedicineController.deleteMedicine)

export const medicineRouter: Router = router

