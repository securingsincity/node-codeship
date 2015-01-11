var request = require('request'),
  CODE_SHIP_URL = 'https://codeship.com/api/v1/',
  API_KEY_HELPER = '?api_key=',
  _ = require('lodash');

module.exports  = {
  projects : function (callback) {
    if (!this.apiKey) {
      throw 'must specify api key';
    }
    var url = CODE_SHIP_URL+"projects.json"+API_KEY_HELPER+this.apiKey;
    request({url:url, json:true}, function (err,httpResponse,body) {
      return callback(body);
    });
  },
  project : function (projectId,callback) {
    if (!this.apiKey) {
      throw 'must specify api key';
    }
    if (!projectId) {
      throw 'must specify project id';
    }
    var url = CODE_SHIP_URL+"projects/"+projectId+".json"+API_KEY_HELPER+this.apiKey;
    request({url:url, json:true}, function (err,httpResponse,body) {
      return callback(body);
    });
  }, 
  buildRestart : function (buildId,callback) {
    if (!this.apiKey) {
      throw 'must specify api key';
    }
    if (!buildId) {
      throw 'must specify build id';
    }
    var url = CODE_SHIP_URL+"builds/"+buildId+"/restart.json"+API_KEY_HELPER+this.apiKey;
    request.post({url:url, json:true}, function (err,httpResponse,body) {
      return callback(body);
    });
  }
  
};