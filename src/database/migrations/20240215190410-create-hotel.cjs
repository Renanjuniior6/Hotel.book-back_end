"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Hotels", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serviceTax: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fireEnsurance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      squareMeters: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      garage: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      furniture: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      nearMetro: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      bathroom: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      pets: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      offer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Hotels")
  },
}
