"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "bathroom")
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "bathroom", Sequelize.BOOLEAN)
  },
}
