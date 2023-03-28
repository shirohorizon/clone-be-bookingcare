'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allcode.hasMany(models.User, { foreignKey: 'position', sourceKey: 'key' })
      Allcode.hasMany(models.User, { foreignKey: 'gender', sourceKey: 'key' })
      Allcode.hasMany(models.User, { foreignKey: 'role', sourceKey: 'key' })
    }
  }
  Allcode.init({
    key: { type: DataTypes.STRING, primaryKey: true },
    type: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
};