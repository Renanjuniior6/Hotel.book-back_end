"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "path", {
      type: Sequelize.STRING,
      defaultValue: false,
      allowNull: false,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "path", Sequelize.STRING)
  },
}
