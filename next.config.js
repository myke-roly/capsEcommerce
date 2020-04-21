const dotenv = require('dotenv');
const isDev = process.env.NODE_ENV !== "production";
const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

module.exports = {
  env: {
    PORT: process.env.PORT
  },
  compress: true
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
};
