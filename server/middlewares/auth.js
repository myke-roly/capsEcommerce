const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if(!token) {
    return res.status(400).json({auth: false, message: 'token no valido' });
  }
  try {
    const decode = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decode.user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'invalid token' })
  }
}