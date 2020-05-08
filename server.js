const express = require('express');
const next = require('next');
const path = require('path');
const morgan = require('morgan');
const body_parser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
const dev = process.env.NODE_ENV !== 'production';
require('dotenv').config({ path: '.env' });
const app = next({ dev });
const PORT = process.env.PORT || 4000;
const routes = require('./server/routes/routes');
// const handler = app.getRequestHandler();
const handler = routes.getRequestHandler(app);
const connectDB = require('./server/config/db');
const mongoose = require('mongoose');

app.prepare().then(() => {
  const server = express();
  mongoose.set("useCreateIndex", true);
  connectDB();
  
  /** Middlewares */
  server.use(cors());
  server.use(compression());
  server.use(morgan('dev')); //common
  server.use(express.static(path.join(__dirname, '/static'), { maxAge: 86400000 }));
  server.use(body_parser.urlencoded({ extended: false }));
  server.use(body_parser.json());

  server.use('/api/auth', require('./server/routes/auth'));
  server.use('/api/login', require('./server/routes/users'));
  server.use('/api/productos', require('./server/routes/products'));
  server.use('/api/producto', require('./server/routes/products'));
  server.use('/api/search', require('./server/routes/search'));

  /** Config Cors */
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "rigin, Accept, Content-Type, Authorization");

    if(req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
  })

  server.use(handler);

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server on port ${process.env.PORT}`);
  });
})
.catch((ex) => {
  console.error('error', ex.stack);
  process.exit(1);
});
