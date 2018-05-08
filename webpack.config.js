const commonConf = require('./build-utils/webpack.common.js')

module.exports = (env, bail) => {
  console.log(env);
  return commonConf
};
