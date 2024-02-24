import Sequelize from "sequelize"

import User from "../app/models/User.js"
import Hotel from "../app/models/Hotel.js"
import City from "../app/models/City.js"

const models = [User, Hotel, City]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(
      "postgresql://postgres:gc-f6A3Cf3EA*edf15G-5-aG4GCAD*G4@roundhouse.proxy.rlwy.net:34233/railway",
    )

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }
}

export default new Database()
