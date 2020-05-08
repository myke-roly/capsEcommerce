const Products = require('../models/products'); 

exports.search = async (req, res) => {
  
  try {
    const products = await Products.find({ title: /^c/});
    if(!products) {
      return res.status(403).json({ message: 'No se econtro ningun resultado' });
    }

    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error en el servidor!'});
  }
}