const Users = require('../models/Users');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async ( req, res ) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  } 
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ email });
    if(user) {
      return res.status(404).json({ message: 'Usuario ya registrado'});
    }

    user = new Users(req.body);
    user.password = await user.encryptPassword(password);

    const payload = {
      user : { id: user._id}
    }

    jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: 15000
    }, (err, token) => {
        if(err) throw Error(err);
        res.json({token});
    });

    await user.save();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error en el servidor'});
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select('-password');
    console.log(req.user.id);
    if(!user) {
      return res.status(404).json({ message: 'El usuario no esta registrado'});
    }
    
    res.json({ user })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor'});
  }
}