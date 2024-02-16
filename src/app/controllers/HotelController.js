import * as Yup from "yup"
import Hotel from "../models/Hotel.js"

class HotelController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      city_id: Yup.number().required(),
      price: Yup.number().required(),
      serviceTax: Yup.number().required(),
      fireEnsurance: Yup.number().required(),
      rooms: Yup.number().required(),
      squareMeters: Yup.number().required(),
      garage: Yup.bool().required(),
      furniture: Yup.bool().required(),
      nearMetro: Yup.bool().required(),
      bathroom: Yup.bool().required(),
      pets: Yup.bool().required(),
      offer: Yup.bool().required(),
    })

    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(401).json({ error: err.errors })
    }

    const {
      name,
      city_id,
      price,
      serviceTax,
      fireEnsurance,
      rooms,
      squareMeters,
      garage,
      furniture,
      nearMetro,
      bathroom,
      pets,
      offer,
    } = req.body

    const { filename: path } = req.file

    const hotel = await Hotel.create({
      name,
      city_id,
      price,
      serviceTax,
      fireEnsurance,
      rooms,
      squareMeters,
      garage,
      furniture,
      nearMetro,
      bathroom,
      pets,
      offer,
      path,
    })

    return res.status(201).json(hotel)
  }

  async index(req, res) {
    const hotels = await Hotel.findAll()

    return res.status(200).json(hotels)
  }
}

export default new HotelController()
