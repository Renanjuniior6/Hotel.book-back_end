import { Router } from "express"
import UserController from "./app/models/controllers/UserController"

const routes = new Router()

routes.post("/users", UserController.store)

export default routes
