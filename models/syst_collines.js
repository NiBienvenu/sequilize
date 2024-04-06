
const { DataTypes } = require('sequelize');
const sequelize = require('./index.js')
const syst_zones = require('./syst_zones')

    const Syst_collines = sequelize.define("syst_collines", {
      COLLINE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
        COLLINE_NAME: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ZONE_ID:{
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
 
  
    }, {
      freezeTableName: true,
      tableName: 'syst_collines',
      timestamps: false
    });
   
    Syst_collines.belongsTo(syst_zones, { foreignKey: 'ZONE_ID', as:'zone' });
    module.exports = Syst_collines