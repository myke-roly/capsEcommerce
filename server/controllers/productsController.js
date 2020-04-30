const Products = require('../models/products');

exports.addProduct = async (req, res) => {
  console.log(req.body);
  try {
    let product = new Products(req.body);
    res.status(200).json(product);
    await product.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    console.log({products});
    if(!products) {
      return res.status(404).json({ message: 'No se encontro ningun producto'});
    }

    return res.status(200).json({products});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor'});
  }
};
