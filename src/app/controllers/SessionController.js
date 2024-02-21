import * as Yup from "yup"
import User from "../models/User.js"
import Jwt from "jsonwebtoken"
import AuthConfig from "../../config/auth.js"

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required("Email obrigatório!"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha obrigatória"),
    })

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Make sure your email or password is correct" })
    }

    const { email, password } = request.body

    const user = await User.findOne({
      where: { email },
    })

    if (!user) {
      return response
        .status(400)
        .json({ error: "Make sure your email or password is correct" })
    }

    if (!user.checkPassword(password)) {
      return response
        .status(400)
        .json({ error: "Make sure your email or password is correct" })
    }

    return response.status(200).json({
      id: user.id,
      name: user.name,
      email,
      token: Jwt.sign({ id: user.id, name: user.name }, AuthConfig.secret, {
        expiresIn: AuthConfig.expiresIn,
      }),
    })
  }
}

export default new SessionController()
