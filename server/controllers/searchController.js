const Products = require('../models/products');

exports.search = async (req, res) => {
  const { query } = req.query;
  try {
    let products = await Products.find();

    const findProducts = products.filter(product => {
      if(query.length < 1) return;
      return product.title.indexOf(query) !== -1;
    });
    
    if (!findProducts) {
      return res.status(403).json({ message: 'No se econtro ningun resultado' });
    }
    res.status(200).json({ findProducts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'error en el servidor!' });
  }
};
