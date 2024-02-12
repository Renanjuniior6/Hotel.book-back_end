import { Router } from "express"
import UserController from "./app/models/controllers/UserController.js"
import SessionController from "./app/models/controllers/SessionController.js"
import authMiddleware from "./app/middleware/auth"
const routes = new Router()

routes.post("/users", UserController.store)

routes.post("/session", SessionController.store)

routes.use(authMiddleware)

export default routes