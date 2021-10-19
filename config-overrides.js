const path = require('path');

module.exports = override = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: { '@': path.resolve(__dirname, 'src') },
  };

  return config;
};
