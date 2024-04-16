import { Router } from "express";
import * as authEmpleadoController from "../controller/auth.empleado.controller.js";

const router = Router();

router.post('/crear', authEmpleadoController.crear);
router.post('/login', authEmpleadoController.login);
router.get('/obtenerEmpleados', authEmpleadoController.obtenerEmpleados);
router.get('/obtenerEmpleado/:id', authEmpleadoController.obtenerEmpleado);
router.put('/actualizarEmpleado/:id', authEmpleadoController.actualizarEmpleado);
router.delete('/eliminarEmpleado/:id', authEmpleadoController.eliminarEmpleado);

export default router;