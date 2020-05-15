import express from 'express'
import { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    name: 'Marcelo Nogueira da Silva',
    age: 36,
    graduation: ['Computer Engineer', 'data scientist'],
  })
})

const port = 8000

app.listen(port, () => console.log(`server running on port: ${port}`))
