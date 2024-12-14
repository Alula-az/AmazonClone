const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'AmazonClone',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

