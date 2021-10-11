'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init(
    {
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      hours: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Location',
      tableName: 'locations'
    }
  )
  return Location
}
