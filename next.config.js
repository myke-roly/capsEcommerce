module.exports = {
  compress: true,
  env: {
    PORT: 8080,
    // NODE_ENV: "dev",
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
