const syst_communes = require("./syst_communes");

const { DataTypes } = require('sequelize');
const sequelize = require('./index.js')

    const Syst_zones = sequelize.define("syst_zones", {
      ZONE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
        ZONE_NAME: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      COMMUNE_ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LATITUDE:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      LONGITUDE:{
        type: DataTypes.FLOAT,
        allowNull: false,
      }
 
  
    },{
      freezeTableName: true,
      tableName: 'syst_zones',
      timestamps: false
    });
   
    Syst_zones.belongsTo(syst_communes, { foreignKey: 'COMMUNE_ID',as:'commune' });

    module.exports = Syst_zones;