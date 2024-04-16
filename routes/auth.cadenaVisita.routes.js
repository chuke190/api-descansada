import { Router } from "express";
import * as authCadenaVisitaController from "../controller/auth.cadenaVisita.controler.js";

const router = Router();

router.post("/procesarCadenaVisita", authCadenaVisitaController.procesarCadena);
router.get("/obtenerCadenasVisita", authCadenaVisitaController.obtenerCadena);

export default router;