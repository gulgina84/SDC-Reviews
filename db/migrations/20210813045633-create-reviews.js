'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.INTEGER
      },
      summary: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      recommend: {
        type: Sequelize.BOOLEAN
      },
      reported: {
        type: Sequelize.BOOLEAN
      },
      reviewer_name: {
        type: Sequelize.STRING
      },
      reviewer_email: {
        type: Sequelize.STRING
      },
      response: {
        type: Sequelize.STRING
      },
      helpfulness: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  }
};