import { Router } from 'express';
import * as authCadenaController from '../controller/auth.cadena.controller.js';

const router = Router();

router.post('/procesarCadena', authCadenaController.procesarCadena);
router.get('/obtenerCadena', authCadenaController.obtenerCadena);

export default router;