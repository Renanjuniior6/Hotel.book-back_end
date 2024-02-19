import Sequelize from "sequelize"

import User from "../app/models/User.js"
import configDatabase from "../config/database.js"
import Hotel from "../app/models/Hotel.js"
import City from "../app/models/City.js"

const models = [User, Hotel, City]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }
}

export default new Database()
