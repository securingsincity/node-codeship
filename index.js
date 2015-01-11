var codeShipHTTP = require('./lib/CodeShipHTTP.js'),
  _ = require('lodash');


var CodeShipClient = function(options) {
  if (!options.hasOwnProperty('apiKey')) {
    throw 'must specify api key';
  }
  this.apiKey = options.apiKey;
  _.extend(this, codeShipHTTP);
};

module.exports = CodeShipClient;