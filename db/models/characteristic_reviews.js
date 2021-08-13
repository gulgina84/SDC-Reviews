'use strict';
require('sequelize')
const { Model } = require('sequelize');
const reviews = require('./reviews');
module.exports = (sequelize, DataTypes) => {
  class Characteristics_reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Characteristics_reviews.belongsTo(models.reviews);


    }
  }
  Characteristics_reviews.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      review_id: {
        allowNull: false,
        type: DataTypes.INTEGER
        // reference: {
        //   model: 'reviews',
        //   key: 'id'
        // }
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Characteristics_reviews',
      // tableName: 'characteristics_reviews',
      // freezeTableName: true,
    }
  );
  return Characteristics_reviews;
};