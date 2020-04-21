const dotenv = require('dotenv').config();

module.exports = {
  env: {
    PORT: process.env.PORT
  },
  compress: true
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
};
