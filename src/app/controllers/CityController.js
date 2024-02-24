import * as Yup from "yup"
import City from "../models/City.js"
import User from "../models/User.js"

class CityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    })

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: "It must be a string!" })
    }

    const { name } = req.body

    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

    const cityExists = await City.findOne({
      where: { name },
    })

    if (cityExists) {
      return res.status(401).json({ error: "City already exists!" })
    }

    const { id } = await City.create({
      name,
    })

    return res.status(201).json({ name, id })
  }

  async index(req, res) {
    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

    const cities = await City.findAll()

    return res.status(200).json(cities)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    })

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: "It must be a string!" })
    }

    const { name } = req.body

    const { id } = req.params

    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

    const city = await City.findByPk(id)

    if (!city) {
      return res
        .status(400)
        .json({ error: "Make sure your city Id is correct!" })
    }

    await City.update(
      {
        name,
      },
      {
        where: { id },
      },
    )

    return res.json({ message: "Item updated!" })
  }

  async delete(req, res) {
    const { id } = req.params

    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

    const city = await City.findByPk(id)

    if (!city) {
      return res
        .status(400)
        .json({ error: "Make sure your city Id is correct!" })
    }

    await City.destroy({
      where: { id },
    })

    return res.json({ message: "Item deleted!" })
  }
}

export default new CityController()
