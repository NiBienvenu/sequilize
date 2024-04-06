
const { DataTypes } = require('sequelize');
const sequelize = require("./index.js")
const syst_collines = require('./syst_collines');

  const Contact = sequelize.define("contacts", {
    contactId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entreprise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },
    profil: {
      type: DataTypes.TEXT,
    },
    COLLINE_ID:{
      type: DataTypes.INTEGER,
        allowNull: false,
    }

  },{
    freezeTableName: true,
    tableName: 'contacts',
    timestamps: false
  });

  Contact.belongsTo(syst_collines, { foreignKey: 'COLLINE_ID', as: 'colline' });
  module.exports = Contact