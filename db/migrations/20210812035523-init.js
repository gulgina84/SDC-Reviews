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
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull:false,
        type: Sequelize.DATE
      },
      summary: {
        allowNull: false,
        type: Sequelize.STRING
      },
      body: {
        allowNull: false,
        type: Sequelize.STRING
      },
      recommend: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      reported: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defalutValues: false
      },
      reviewer_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reviewer_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      response: {
        allowNull: true,
        type: Sequelize.STRING
      },
      helpfulness: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('characteristic_reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      characteristic_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'characteristics',
          key: 'id'
        }
      },
      review_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'reviews',
          key: 'id'
        }
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
    await queryInterface.createTable('characteristics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
    await queryInterface.createTable('reviews_photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      review_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'reviews',
          key: 'id'
        }
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
       await queryInterface.dropAllTables();
  }
};