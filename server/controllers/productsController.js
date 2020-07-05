const Products = require('../models/products');

exports.addProduct = async (req, res) => {
  try {
    let product = new Products(req.body);
    
    res.status(200).json({ message: 'Producto agragado!' });
    await product.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if(!products) {
      return res.status(404).json({ message: 'No se encontro ningun producto'});
    }

    res.status(200).json({message: 'Se agrego un nuevo producto!', products});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor'});
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if(!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor!' })
  }
}

exports.deleteproduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if(!product) {
      return res.status(404).json({ message: 'Producto no econtrado'});
    }
    await Products.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: 'Producto eliminado!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor!'})
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if(!product) {
      return res.status(404).json({ message: 'Producto no econtrado'});
    }
    await Products.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Producto actualizado!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error en el servidor!'})
  }
} 
