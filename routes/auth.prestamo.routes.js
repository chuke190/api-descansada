import { Router } from "express";
import * as authPrestamoController from "../controller/auth.prestamo.controller.js";

const router = Router();

router.post('/crear', authPrestamoController.crear);
router.get('/obtenerPrestamos', authPrestamoController.obtenerPrestamos);
router.get('/contarPrestamos', authPrestamoController.contarPrestamos);
router.put('/devolver', authPrestamoController.devolver);

export default router;