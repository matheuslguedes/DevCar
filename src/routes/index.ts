import { Router } from 'express'
import * as pageController from '../controllers/pageController'


const router = Router();

router.get('/', pageController.home)
router.get('/carros', pageController.carros)
router.get('/motos', pageController.motos)
router.get('/caminhoes', pageController.caminhoes)

export default router;