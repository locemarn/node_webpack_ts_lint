import { Request, Response, NextFunction } from 'express'

interface User {
  name: string
}

class UserController {
  User: User

  constructor(User: User) {
    this.User = User
  }

  getAll(_req: Request, res: Response, next: NextFunction): void {
    res.status(200).json(this.User)
    next()
  }
}

const comesModelOnRoute = {
  name: 'Marcelo',
}

const userController = new UserController(comesModelOnRoute)

export default userController
