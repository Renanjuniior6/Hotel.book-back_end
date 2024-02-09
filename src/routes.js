import { Router } from "express"
import UserController from "./app/models/controllers/UserController.js"
import SessionController from "./app/models/controllers/SessionController.js"

const routes = new Router()

routes.post("/users", UserController.store)

routes.post("/session", SessionController.store)

export default routes
