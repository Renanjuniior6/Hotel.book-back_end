const { v4 } = require("uuid")
const multer = require("multer")
const { resolve, extname } = require("path")

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      return callback(null, v4() + extname(file.originalname))
    },
  }),
}
