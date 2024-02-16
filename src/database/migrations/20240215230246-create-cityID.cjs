"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("hotels", "city")
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("hotels", "city", Sequelize.STRING)
  },
}
