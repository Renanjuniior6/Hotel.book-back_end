"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "additional", {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "additional")
  },
}
