module.exports = {
  compress: true,
  env: {
    PORT: 4000,
    // URL_BASE: 'http://localhost:8080',
    // MONGO_DB: 'mongodb+srv://capsDB:uVoC8ECze76xJ9QN@cluster0-onwp0.mongodb.net/test?retryWrites=true&w=majority',
    // SECRET_TOKEN: "my_secret_token",
    // NODE_ENV: "dev"
  },
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
  // exportPathMap: async (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) => {
  //   return {
  //     '/contacto': { page: '/contacto' },
  //   };
  // },
};
