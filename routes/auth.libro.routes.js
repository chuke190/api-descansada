import { Router } from "express";
import * as authLibroController from "../controller/auth.libro.controller.js";

const router = Router();

router.post('/crear', authLibroController.crear);
router.get('/obtenerLibros', authLibroController.obtenerLibros);
/* router.get('/obtenerLibro/:id', authLibroController.obtenerLibro);
router.put('/actualizarLibro/:id', authLibroController.actualizarLibro);
router.delete('/eliminarLibro/:id', authLibroController.eliminarLibro);*/
router.get('/contarLibro', authLibroController.contarLibro); 
router.get('/obtenerLibroClasificacion', authLibroController.obtenerLibroClasificacion);

export default router;