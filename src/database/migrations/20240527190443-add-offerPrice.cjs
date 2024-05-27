"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "offerPrice", {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: true,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "offerPrice")
  },
}
