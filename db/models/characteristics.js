'use strict';
require('sequelize')
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Characteristics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Characteristics.init({
      id: {type: DataTypes.INTEGER, primaryKey: true},
      product_id: DataTypes.INTEGER,
      name: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Characteristics'
    }
);
  return Characteristics;
};


