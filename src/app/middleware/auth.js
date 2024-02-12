import Jwt from "jsonwebtoken"

export default (request, response, next) => {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).JSON({ id: 'not Token provided' })
  }
}