"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Hotels", "cityId", {
      type: Sequelize.INTEGER,
      references: { model: "Cities", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Hotels", "cityId", Sequelize.INTEGER)
  },
}
