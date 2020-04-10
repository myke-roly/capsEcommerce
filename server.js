const express = require('express');
const next = require('next');
const path = require('path');
const morgan = require('morgan');
const body_parser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const PORT = process.env.PORT || 8080;
const routes = require('./server/routes/routes');
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /** Middlewares */
  server.use(cors());
  server.use(compression());
  server.use(morgan('dev')); //common
  server.use(express.static(__dirname + '/static', { maxAge: 86400000 }));
  server.use(body_parser.urlencoded({ extended: false }));
  server.use(body_parser.json());

  // server.get('*', (req, res) => {
  //   return handler(req, res);
  // });

  server.get('/api/products', (req, res) => {
    console.log("this is method get..")
    return res.status(200).send({ message: 'This is route to getproducts' });
  });

  server.post('/api/add-products/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params);
    return res.status(200).json({ message: 'This is route post addProducts' });
  });

  server.use(handler);

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server on port ${PORT}`);
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
