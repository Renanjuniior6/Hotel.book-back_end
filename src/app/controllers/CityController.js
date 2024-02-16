import * as Yup from "yup"
import City from "../models/City.js"

class CityController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    })

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ message: "It must be a string" })
    }

    const { name } = req.body

    const cityExists = await City.findOne({
      where: { name },
    })

    if (cityExists) {
      return res.status(401).json({ message: "City already exists!" })
    }

    const { id } = await City.create({
      name,
    })

    return res.status(201).json({ name, id })
  }

  async index(req, res) {
    const cities = await City.findAll()

    return res.status(200).json(cities)
  }
}

export default new CityController()
