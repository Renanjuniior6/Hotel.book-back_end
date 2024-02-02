import Sequelize, { Model } from 'sequelize'

class Products extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      price: Sequelize.INTEGER,
    }, {
      sequelize,
    })
  }
}

export default Products 