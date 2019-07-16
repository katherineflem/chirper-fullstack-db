import {Router} from 'express';
import chirpsRouter from './chirps'
import usersRouter from './users'
import mentionsRouter from './mentions'

const router = Router();

//want to use the chirpsRouter logic when we go to that endpoint
router.use('/chirps', chirpsRouter)

router.use('/users', usersRouter)

router.use('/mentions', mentionsRouter)

export default router;


