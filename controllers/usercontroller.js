const User = require('../models/users')

const addUser = async (req, res) => {
  let info = req.body

  try {
    const user = await User.create(info);
    res.status(200).send(user);

    console.log(info)
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the Product",
    });
  }
};

// login
const login = async (req,res)=>{
  const username = req.query.username
  const password = req.query.password
  console.log(username)
  console.log(password)
  try {
    const user = await User.findOne({
      where:{
        username: username,
        password: password
      }
    })
    // console.log(user)
    res.status(200).send(user);
    
  } catch (error) {
    
  }
}

// get all products
const getAllUser = async (req, res) => {

  let user = await User.findAll({});
  res.status(200).send(user);
  console.log(user);
};

// get single products
const getSingleUser = async (req, res) => {
  let user = req.params.user;
  let userinfo = await User.findOne({ where: { username: user } });
  res.status(200).send(userinfo);

};

// update a product
const updateUser = async (req, res) => {
  let id = req.params.id;
  const User = await User.update(req.body, { where: { id: id } });
  res.status(200).send('User is Updated');
};

// delete a product
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("User is deleted");
};



module.exports = {
  addUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  login,
};