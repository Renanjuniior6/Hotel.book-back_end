import Sequelize from 'sequelize'
import User from '../app/models/User'
import configDatabase from "../config/database"
import Products from '../app/models/Product'

const models = [User, Products]
class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models.map((model) => model.init(this.connection)).map(model => model.associate &&
      model.associate(this.connection.models))
  }
}

export default new Database()