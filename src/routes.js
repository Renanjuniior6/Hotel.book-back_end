import { Router } from "express"
import multerConfig from "./config/multer.js"

import UserController from "./app/controllers/UserController.js"
import SessionController from "./app/controllers/SessionController.js"
import HotelController from "./app/controllers/HotelController.js"
import authMiddleware from "./app/middlewares/auth.js"
import CityController from "./app/controllers/CityController.js"
import multer from "multer"

const routes = new Router()
const uploads = multer(multerConfig)

routes.get("/", (req, res) => {
  return res.json({ message: "Hello API" })
})

routes.post("/users", UserController.store)

routes.post("/session", SessionController.store)

routes.get("/cities", CityController.index)

routes.get("/hotels", HotelController.index)

routes.use(authMiddleware)

routes.post("/create-hotel", uploads.single("file"), HotelController.store)
routes.put("/hotel/:id", uploads.single("file"), HotelController.update)
routes.delete("/hotel/:id", HotelController.delete)

routes.post("/create-city", CityController.store)
routes.put("/city/:id", CityController.update)
routes.delete("/city/:id", CityController.delete)

export default routes
