import * as Yup from "yup"
import Hotel from "../models/Hotel.js"
import City from "../models/City.js"
import User from "../models/User.js"
class HotelController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cityId: Yup.number().required(),
      price: Yup.number().required(),
      serviceTax: Yup.number().required(),
      additional: Yup.number().required(),
      rooms: Yup.number().required(),
      squareMeters: Yup.number().required(),
      garage: Yup.bool().required(),
      pool: Yup.bool().required(),
      bathroom: Yup.number().required(),
      pets: Yup.bool().required(),
      offer: Yup.bool().required(),
      offerPrice: Yup.number(),
      stars: Yup.number().required(),
      floor: Yup.number().required(),
      restaurant: Yup.bool().required(),
    })

    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(401).json({ error: err.errors })
    }

    const {
      name,
      cityId,
      price,
      serviceTax,
      additional,
      rooms,
      squareMeters,
      garage,
      pool,
      bathroom,
      pets,
      offer,
      offerPrice,
      stars,
      floor,
      restaurant,
    } = req.body

    const { filename: path } = req.file

    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

    const hotelExist = await Hotel.findOne({
      where: { name },
    })

    if (hotelExist) {
      return res.status(401).json({ error: "Hotel already exists!" })
    }

    const hotel = await Hotel.create({
      name,
      cityId,
      price,
      serviceTax,
      additional,
      rooms,
      squareMeters,
      garage,
      pool,
      bathroom,
      pets,
      offer,
      path,
      offerPrice,
      stars,
      floor,
      restaurant,
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

    return res
      .status(200)
      .json(hotels.sort((hotel1, hotel2) => hotel1.id - hotel2.id))
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cityId: Yup.number(),
      price: Yup.number(),
      serviceTax: Yup.number(),
      additional: Yup.number(),
      rooms: Yup.number(),
      squareMeters: Yup.number(),
      garage: Yup.bool(),
      pool: Yup.bool(),
      bathroom: Yup.number(),
      pets: Yup.bool(),
      offer: Yup.bool(),
      offerPrice: Yup.number(),
      stars: Yup.number(),
      floor: Yup.number(),
      restaurant: Yup.bool(),
    })

    try {
      await schema.validateSync(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(401).json({ error: err.errors })
    }

    const {
      name,
      cityId,
      price,
      serviceTax,
      additional,
      rooms,
      squareMeters,
      garage,
      pool,
      bathroom,
      pets,
      offer,
      offerPrice,
      stars,
      floor,
      restaurant,
    } = req.body

    const { id } = req.params

    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

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
        cityId,
        price,
        serviceTax,
        additional,
        rooms,
        squareMeters,
        garage,
        pool,
        bathroom,
        pets,
        offer,
        path,
        offerPrice,
        stars,
        floor,
        restaurant,
      },
      {
        where: { id },
      },
    )

    return res.status(201).json({ message: "Item updated!" })
  }

  async delete(req, res) {
    const { id } = req.params

    const { admin: isAdmin } = await User.findByPk(req.userId)

    if (!isAdmin) {
      return res.status(401).json({ message: "Acess denied" })
    }

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
