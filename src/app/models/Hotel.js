import Sequelize, { Model } from "sequelize"

class Hotel extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        serviceTax: Sequelize.INTEGER,
        additional: Sequelize.INTEGER,
        rooms: Sequelize.INTEGER,
        squareMeters: Sequelize.INTEGER,
        garage: Sequelize.BOOLEAN,
        restaurant: Sequelize.BOOLEAN,
        pool: Sequelize.BOOLEAN,
        bathroom: Sequelize.INTEGER,
        pets: Sequelize.BOOLEAN,
        offer: Sequelize.BOOLEAN,
        path: Sequelize.STRING,
        offerPrice: Sequelize.INTEGER,
        stars: Sequelize.INTEGER,
        floor: Sequelize.INTEGER,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://hotelbook-backend-production.up.railway.app/hotel-file/${this.path}`
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
