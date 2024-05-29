"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "nearMetro")
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "nearMetro", Sequelize.BOOLEAN)
  },
}
