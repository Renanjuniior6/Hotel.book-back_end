import * as Yup from "yup"
import Hotel from "../models/Hotel.js"
import City from "../models/City.js"

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
    const hotels = await Hotel.findAll({
      include: [
        {
          model: City,
          as: "city",
          attributes: ["id", "name"],
        },
      ],
    })

    return res.status(200).json(hotels)
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      city_id: Yup.number(),
      price: Yup.number(),
      serviceTax: Yup.number(),
      fireEnsurance: Yup.number(),
      rooms: Yup.number(),
      squareMeters: Yup.number(),
      garage: Yup.bool(),
      furniture: Yup.bool(),
      nearMetro: Yup.bool(),
      bathroom: Yup.bool(),
      pets: Yup.bool(),
      offer: Yup.bool(),
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

    const { id } = req.params

    const findHotel = await Hotel.findByPk(id)

    if (!findHotel) {
      return res
        .status(401)
        .json({ error: "Make sure your hotel Id is correct" })
    }

    let path
    if (req.file) {
      path = req.file.filename
    }

    await Hotel.update(
      {
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
      },
      {
        where: { id },
      },
    )

    return res.status(201).json({ message: "Item updated!" })
  }

  async delete(req, res) {
    const { id } = req.params

    const hotel = await Hotel.findByPk(id)

    if (!hotel) {
      return res
        .status(400)
        .json({ error: "Make sure your hotel Id is correct!" })
    }

    await Hotel.destroy({
      where: { id },
    })

    return res.json({ messagem: "Item deleted!" })
  }
}

export default new HotelController()
