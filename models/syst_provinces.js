
const { DataTypes } = require('sequelize');
const sequelize = require('./index.js')

    const Syst_provinces = sequelize.define("syst_provinces", {
      PROVINCE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
        PROVINCE_NAME: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OBJECTIF:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PROVINCE_LATITUDE:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      PROVINCE_LONGITUDE:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      PAYS_CODE:{
        type: DataTypes.STRING,
        allowNull: false,
      }
 
  
    },{
      freezeTableName: true,
      tableName: 'syst_provinces',
      timestamps: false
    });
 
    
module.exports = Syst_provinces;