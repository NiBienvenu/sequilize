
const { DataTypes } = require('sequelize');
const sequelize = require('./index.js')

const User =  sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = User 
 

