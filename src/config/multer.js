import { v4 } from "uuid"
import multer from "multer"
import path, { extname } from "path"
import { fileURLToPath } from "url"

// eslint-disable-next-line prettier/prettier
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname))
    },
  }),
}
