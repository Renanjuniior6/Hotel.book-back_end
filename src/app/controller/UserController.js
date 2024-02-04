import { v4 } from 'UUID'
import User from '../models/User'

class UserController {
  async store(request, response) {
    const { name, email, password_hash } = request.body

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
    })

    return response.status(201).json({ id: id.user, name, email, password_hash })
  }
}

export default new UserController()