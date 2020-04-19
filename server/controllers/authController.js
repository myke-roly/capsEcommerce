const Users = require('../models/Users');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

exports.authUser = async (req, res) => {
  const errorAuth = validationResult(req); 
  if(!errorAuth.isEmpty()) {
    return res.status(400).json({ message: errorAuth.array() });
  }
  
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if(!user) {
      return res.status(404).json({ message: 'El usuario no existe'});
    }

    const validPassword = user.validatePassword(password);
    if(!validPassword) {
      return res.status(401).json({ auth: false, message: 'Contrasena incorrecta' });
    }

    const payload = { 
      user : { id: user._id}
    };
    jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: 15000
    }, (error, token) => {
      if(error) throw Error(error);
      res.json({ auth: true, token})
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select('-password');
    if(!user) {
      return res.status(404).json({ message: 'El usuario no esta registrado'});
    }
    
    res.json({user: user});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor'});
  }
}
