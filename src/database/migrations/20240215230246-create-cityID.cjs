"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "city")
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "city", Sequelize.STRING)
  },
}
