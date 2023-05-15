const { composePlugins, withNx, withWeb } = require("@nrwl/rspack");

module.exports = composePlugins(withNx(), withWeb(), (config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
      },
    ],
    type: 'css',
  })
  return config;
});
