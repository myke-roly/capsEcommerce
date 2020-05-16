const dotenv = require('dotenv');
const isDev = process.env.NODE_ENV !== "production";
// const envFile = isDev ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config();

const url_base = isDev ? process.env.URL_BASE : 'https://caps-arg.herokuapp.com/'; 

module.exports = {
  env: {
    PORT: process.env.PORT,
    URL_BASE: url_base
  },
  compress: true
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
};
