import { Router } from "express"
import multerConfig from "./config/multer.cjs"

import UserController from "./app/controllers/UserController.js"
import SessionController from "./app/controllers/SessionController.js"
import HotelController from "./app/controllers/HotelController.js"
import authMiddleware from "./app/middlewares/auth.js"
import CityController from "./app/controllers/CityController.js"
import multer from "multer"

const routes = new Router()
const uploads = multer(multerConfig)

routes.post("/users", UserController.store)

routes.post("/session", SessionController.store)

routes.use(authMiddleware)

routes.post("/create-hotel", uploads.single("file"), HotelController.store)
routes.get("/hotels", HotelController.index)
routes.put('/hotel/:id', upload.single('file'), HotelController.update)

routes.post("/create-city", CityController.store)
routes.get("/cities", CityController.index)

export default routes
