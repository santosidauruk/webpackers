const commonConf = require('./build-utils/webpack.common.js')
const webpackMerge = require('webpack-merge')

module.exports = (env, bail) => {
  console.log(env);
  const envConfig = require(`./build-utils/webpack.${env}.js`)
  return webpackMerge(commonConf, envConfig)
};