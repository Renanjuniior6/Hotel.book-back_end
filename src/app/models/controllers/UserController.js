import { v4 } from "uuid"
import User from "../User.js"
import * as Yup from "yup"

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required("Nome obrigatório"),
      email: Yup.string().email().required("Email Obrigatório"),
      password: Yup.string()
        .required()
        .min(6, "Digite pelo menos 6 caracteres"),
    })

    try {
      await schema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

    const { name, email, password } = request.body

    const userExist = await User.findOne({
      where: { email },
    })

    if (userExist) {
      return response.status(401).json({ error: "User already exists" })
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
    })

    return response.status(201).json({ id: user.id, name, email })
  }
}

export default new UserController()
