import express from "express"
import routes from "./routes.js"
import { resolve } from "path"

import "./database/index.js"

class App {
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      "hotel-file",
      express.static(resolve(__dirname, "..", "uploads")),
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
