import { Router } from "express";
import * as authVisitaController from "../controller/auth.visita.controller.js";

const router = Router();

router.post('/crear', authVisitaController.crear);
router.get('/obtenerVisitas', authVisitaController.obtenerVisitas);

export default router;