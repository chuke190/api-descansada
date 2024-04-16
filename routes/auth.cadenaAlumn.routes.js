import { Router } from "express";
import * as authCadenaAlumnController from "../controller/auth.cadenaAlumn.controller.js";

const router = Router();

router.post("/procesarCadenaAlumn", authCadenaAlumnController.procesarCadenaAlumn);
router.get("/obtenerCadenasAlumn", authCadenaAlumnController.obtenerCadenasAlumn);
export default router;