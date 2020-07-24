const mercadopago = require('mercadopago');

/**
 * 
 * @param array[] req.body 
 * @param {*} res 
 */
exports.sendPayment = (req, res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
  });

  const items = req.body.map(item => ({
      id: item.id,
      category_id: "productos/servicios",
      description: `Color ${item.color.toUpperCase()} - Talle ${item.talle.toUpperCase()}`,
      title: item.title,
      quantity: item.quantity,
      unit_price: item.price,
      currency_id: 'ARS',
    })
  )

  let preference = {
    items: items,
    back_urls: {
      success: process.env.URL_BASE + '/success',
    },
    auto_return: 'approved',
  };

  try {
    mercadopago.preferences
      .create(preference)
      .then((response) => {
        global.init_point = response.body.init_point;
        const urlRedirect = global.init_point;
        // solo mandar urlRedirect
        // los demas datos son sensibles
        return res.json({ urlRedirect, response });
      })
      .catch((error) => console.log('Erro mercado pago: ', error));
  } catch (error) {
    console.log('Error aplicacion: ', error);
  }
};
