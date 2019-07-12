import {Router} from 'express';
import chirpsRouter from './chirps'

const router = Router();

//want to use the chirpsRouter logic when we go to that endpoint
router.use('/chirps', (chirpsRouter))

export default router;


