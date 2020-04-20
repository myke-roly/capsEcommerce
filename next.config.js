module.exports = {
  webpack: (config, { build, dev, isServer, defaultLoaders, webpack}) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    if(!dev) config.devtool = 'source-map'

    return config
  },
  webpackDevMiddleware: config => {   
    return config
  },
  compress: true,
  env: {
    PORT: 4000,
  },
  /** useFileSystemPublicRoutes: true  /** Nos sirve para desabilitar la carpeta page */
};
