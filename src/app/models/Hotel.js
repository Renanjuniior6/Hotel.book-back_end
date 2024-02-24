import Sequelize, { Model } from "sequelize"

class Hotel extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        serviceTax: Sequelize.INTEGER,
        fireEnsurance: Sequelize.INTEGER,
        rooms: Sequelize.INTEGER,
        squareMeters: Sequelize.INTEGER,
        garage: Sequelize.BOOLEAN,
        furniture: Sequelize.BOOLEAN,
        nearMetro: Sequelize.BOOLEAN,
        bathroom: Sequelize.BOOLEAN,
        pets: Sequelize.BOOLEAN,
        offer: Sequelize.BOOLEAN,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/hotel-file/${this.path}`
          },
        },
      },
      {
        sequelize,
      },
    )
    return this
  }

  static associate(models) {
    this.belongsTo(models.City, { foreignKey: "cityId", as: "city" })
  }
}

export default Hotel
