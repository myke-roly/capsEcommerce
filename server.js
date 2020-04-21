const express = require('express');
const next = require('next');
const path = require('path');
const morgan = require('morgan');
const body_parser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
const dev = process.env.NODE_ENV !== 'production';
const envFile = dev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });
const app = next({ dev });
const PORT = process.env.PORT || 8080;
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

  server.get('/api/me', (req, res) => {
    res.json({ message: 'hola'});
  })

  server.use(handler);

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server on port ${PORT}`);
    // console.log(process.env.NODE_ENV);
  });
})
.catch((ex) => {
  console.error('error', ex.stack);
  process.exit(1);
});
