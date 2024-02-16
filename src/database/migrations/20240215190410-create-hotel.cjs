"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("hotels", {
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
      service_tax: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fire_ensurance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      square_meters: {
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
      near_metro: {
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
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable("hotels")
  },
}
