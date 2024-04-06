const contact  = require("./contact.js");

const { DataTypes } = require('sequelize');
const sequelize = require('./index.js')
    const Message = sequelize.define("message", {
      MESSAGE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
        text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      date:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      ENVOYE_ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RECEVE_ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
 
  
    },{
      freezeTableName: true,
      tableName: 'message',
      timestamps: false
    });
    Message.belongsTo(contact, { foreignKey: 'ENVOYE_ID',as:'envoye'});
    Message.belongsTo(contact, { foreignKey: 'RECEVE_ID',as:'receve'});
    
module.exports =  Message;