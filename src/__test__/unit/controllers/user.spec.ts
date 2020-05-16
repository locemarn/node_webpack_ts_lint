import * as userController from '../../../controllers/user'

interface User {
  name: string
}

const user: User = {
  name: 'Marcelo',
}

it('showd be get controllers data to compare', () => {
  expect(user.name).toBe(userController.default.User.name)
})
