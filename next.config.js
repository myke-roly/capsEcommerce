const dotenv = require('dotenv');
dotenv.config({ path: '.env'});

module.exports = {
  compress: true,
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
};
