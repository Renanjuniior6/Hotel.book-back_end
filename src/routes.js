import { Router } from "express"

const routes = new Router()

routes.get("/", (request, response) => {
  return response.json({ messagem: "Hello World" })
})

export default routes
