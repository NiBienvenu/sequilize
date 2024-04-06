
const { createTokens, validateToken } = require("../config/jsonwebToken");
const { op } = require('sequelize');

const syst_collines = require("../models/syst_collines");
const syst_communes = require("../models/syst_communes");
const syst_zones = require("../models/syst_zones");
const syst_provinces = require("../models/syst_provinces");

// create main model
const Conta=require('../models/contact')
const Colline = require('../models/syst_collines')
const Province = require('../models/syst_provinces')
const Commune = require('../models/syst_communes')
const Zone = require('../models/syst_zones')
const Message = require('../models/message')


// create contact
const addContact = async (req, res) => {
  console.log('pas try arrive')
  let info = req.body
 
  try {
    console.log('try arrive')
    console.log(info)
    Conta.create({...info}).then(cont => {
      res.status(200).send(info);
      //console.log(contact);
      console.log(info)
    })
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};



// get all contact
const getAllContact = async (req, res) => {

  let contact = await Conta.findAll({});
  res.status(200).send(contact);
  console.log(contact);      
          
};

// get all recherche
const getAllRecherche = async (req, res) => {
  let recher = req.params.recher;
  let contact = await Conta.findAll({
    where: {
      nom: {
        [op.like]: recher
      }
    }
  });
  res.status(200).send(contact);
  console.log(contact);
};

// get single contact
const getSingleContact = async (req, res) => {
  let email = req.params.email;
  let contact = await Conta.findOne({ where: { email: email } });
  res.status(200).send(contact);
};

// update a contact
const updateContact = async (req, res) => {
  let id = req.params.id;
  const contact = await Conta.update(req.body, { where: { id: id } });
  res.status(200).send('contact is Updated');
};

// delete a contact
const deleteContact = async (req, res) => {
  let id = req.params.id;
  await Conta.destroy({ where: { id: id } });
  res.status(200).send("contact is deleted");
};
// se connecter
const seconectContact = async (req, res) => {
  const { email, password } = req.body;

  const contact = await Conta.findOne({ where: { email: email } });

  if (!contact) {
    res.status(400).json({ error: "Contact pas disponible" });
  } else {
    const accessToken = createTokens(contact);

    res.cookie("access-token", accessToken, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
      httpOnly: true,
    });

    res.json("LOGGED IN");
  }

}
// les provinces
const getAllProvince = async(req,res)=>{
  let province = await Province.findAll({});
  res.status(200).send(province);
  console.log(province)
}
// les colinnes
const getAllColline = async(req, res) =>{
  let id = req.params.id;
  let colline = await Colline.findAll({
    where:{
      ZONE_ID:id
    }
  });
  res.status(200).send(colline);
  console.log(colline);
}
// les zones
const getAllZone = async(req,res)=>{
  let id = req.params.id
  let zone = await Zone.findAll({
    where:{
      COMMUNE_ID:id
    }
  })
  res.status(200).send(zone)
  console.log(zone)
}
//les communes
const getAllCommune = async(req,res)=>{
  let id = req.params.id;
  let commune = await Commune.findAll({
    where:{
      PROVINCE_ID:id
    }
  })
  res.status(200).send(commune)
  console.log(commune)
}
//Envoyer message
const AddMessage = async (req, res) => {
 
  let message = req.body
 
  try {
    console.log(message)
    Message.create({...message}).then(message => {
      res.status(200).send(message);
      console.log(message)
    });
    
    console.log(message)
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllDetailContact = async (req,res) =>{
  Conta.findAll({
    include: [{
      model: syst_collines,
      as: 'colline',
      include: [{
        model: syst_zones,
        as:'zone',
        include: [{
          model: syst_communes,
          as:'commune',
          include: [{
            model: syst_provinces,
            as:'province'
            
          }]
          
        }]
        
      }]
    }],
  })
  .then(contacts => {
    res.status(200).send(contacts);
    console.log(contacts);
  })
  .catch(error => {
    console.error(error);
  });
}




module.exports = {
  addContact,
  getAllContact,
  getSingleContact,
  updateContact,
  deleteContact,
  seconectContact,
  getAllRecherche,
  getAllDetailContact,
  getAllColline,
  getAllZone,
  getAllCommune,
  getAllProvince,
  AddMessage,

};
