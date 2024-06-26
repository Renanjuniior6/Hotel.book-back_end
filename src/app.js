import express from "express"
import routes from "./routes.js"
import path from "path"
import { fileURLToPath } from "url"
import cors from "cors"

import "./database/index.js"

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const corsOption = {
  origin: "https://hotel-book-front-end.vercel.app",
  credentials: true,
}

class App {
  constructor() {
    this.app = express()
    this.app.use(cors(corsOption))

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(
      "/hotel-file",
      express.static(path.join(__dirname, "..", "uploads")),
    )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
