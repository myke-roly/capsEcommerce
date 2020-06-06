const dotenv = require('dotenv');
const isDev = process.env.NODE_ENV !== "production";
// const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config();

const url_base = isDev ? process.env.URL_BASE : process.env.URL_BASE_PRODUCTION; 

module.exports = {
  env: {
    PORT: process.env.PORT,
    URL_BASE: url_base,
    URL_BASE_MP: process.env.URL_BASE_MP,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
  compress: true
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
};
