'use strict';
require('sequelize')
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews_photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.review_id = this.belongsTo(models.Reviews, {
      //   foreignKey: 'review_id'
      // })
    }
  }
  Reviews_photos.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Reviews_photos'
      // tableName: 'reviews_photos',
      // freezeTableName: true,
    }
  );
  return Reviews_photos;
};