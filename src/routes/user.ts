import { Router, Request, Response, NextFunction } from 'express'
import userController from '../controllers/user'

const router: Router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => userController.getAll(req, res, next))

export default router
