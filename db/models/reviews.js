'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reviews.init({
    id: {type: DataTypes.INTEGER, primaryKey: true},
    product_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    date: DataTypes.INTEGER,
    summary: DataTypes.STRING,
    body: DataTypes.STRING,
    recommend: DataTypes.BOOLEAN,
    reported: DataTypes.BOOLEAN,
    reviewer_name: DataTypes.STRING,
    reviewer_email: DataTypes.STRING,
    response: DataTypes.STRING,
    helpfulness: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};