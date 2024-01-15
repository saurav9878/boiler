const { DataTypes } = require('sequelize');
const { sequelize } = require('../../datastores/sequelize');

/**
 * A sample user model
 */
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
});

module.exports = { User };
