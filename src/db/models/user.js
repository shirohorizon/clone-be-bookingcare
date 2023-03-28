'use strict';
const {
  Model, UUIDV4
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Allcode, { as: 'positionData', foreignKey: 'position', targetKey: 'key' })
      User.belongsTo(models.Allcode, { as: 'genderData', foreignKey: 'gender', targetKey: 'key' })
      User.belongsTo(models.Allcode, { as: 'roleData', foreignKey: 'role', targetKey: 'key' })
    }
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    position: DataTypes.STRING,
    role: DataTypes.STRING,
    refreshToken: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};