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
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /** Middlewares */
  server.use(cors());
  server.use(compression());
  // server.use(morgan('dev'));
  server.use(express.static(__dirname + '/static', { maxAge: 86400000 }));
  server.use(body_parser.json());
  server.use(body_parser.urlencoded({ extended: false }));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server on port ${PORT}`);
  });
});
