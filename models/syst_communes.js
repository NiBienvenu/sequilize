const syst_provinces  = require("./syst_provinces");

const { DataTypes } = require('sequelize');
const sequelize = require('./index.js')
    const Syst_communes = sequelize.define("syst_communes", {
      COMMUNE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
        COMMUNE_NAME: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PROVINCE_ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      COMMUNE_LATITUDE:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      COMMUNE_LONGITUDE:{
        type: DataTypes.FLOAT,
        allowNull: false,
      }
 
  
    },{
      freezeTableName: true,
      tableName: 'syst_communes',
      timestamps: false
    });
    Syst_communes.belongsTo(syst_provinces, { foreignKey: 'PROVINCE_ID',as:'province'});
    
module.exports =  Syst_communes;