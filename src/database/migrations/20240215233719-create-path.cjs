"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("hotels", "path", {
      type: Sequelize.STRING,
      defaultValue: false,
      allowNull: false,
    })
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("hotels", "path")
  },
}
