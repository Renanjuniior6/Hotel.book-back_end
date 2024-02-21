import express from "express"
import routes from "./routes.js"
import path from "path"
import { fileURLToPath } from "url"

import "./database/index.js"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

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
      express.static(path.join(__dirname, "..", "uploads")),
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
