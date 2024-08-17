/* config-overrides.js */
const webpack = require("webpack");
module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.resolve.fallback = {
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    os: require.resolve('os-browserify/browser'),
    stream: require.resolve("stream-browserify"),
    'process/browser': require.resolve('process/browser'),
    vm: require.resolve("vm-browserify")
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
