var _ = require('lodash'),
 CodeShip = require('..');
 CodeShipLib = require('../lib/CodeShipHTTP');
 require('should');

describe('Code ship ci api test suite', function () {
  it('expects an api key', function () {
    var thrower = function () {
        new CodeShip();
    };

    thrower.should.throw();
  });
  it('expects an api key', function () {
    var thrower = function () {
        new CodeShip({});
    };

    thrower.should.throw();
  });
  
  it('apikey given should match apikey of instance', function() {
    var codeShip = new CodeShip({
      apiKey : 'foo'
    });
    'foo'.should.be.exactly(codeShip.apiKey);
  });

  it('should have projects,project,build functions when given an api key', function() {
    var codeShip = new CodeShip({
      apiKey : 'foo'
    });
    codeShip.projects.should.be.a.Function;
    codeShip.project.should.be.a.Function;
    codeShip.buildRestart.should.a.Function;
  });

  it('projects should return an object called projects with an array', function(done) {

    var codeShip = new CodeShip({
      apiKey : process.env.API_KEY
    });
    codeShip.projects(function (response) {
      response.should.be.a.Object;
      response.projects.should.be.a.Array;
      response.projects.length.should.be.greaterThan(0);
      done();
    })
  });

  it('projects with no api key should fail ', function() {
      var thrower = function() {
        CodeShipLib.projects();
      }
      thrower.should.throw();
  });
  
  it('project with no api key should fail ', function() {
      var thrower = function() {
        CodeShipLib.project();
      }
      thrower.should.throw();
  });
  
  it('buildrestart with no api key should fail ', function() {
      var thrower = function() {
        CodeShipLib.buildRestart();
      }
      thrower.should.throw();
  });
  
  it('project should return valid info', function(done) {

    var codeShip = new CodeShip({
      apiKey : process.env.API_KEY
    });
    codeShip.project(54507,function (response) {
      response.should.be.a.Object;
      response.id.should.be.exactly(54507);
      response.uuid.should.be.exactly("f96ce1f0-7050-0132-8828-465f6b223ee2");
      response.builds.should.be.a.Array;
      response.repository_name.should.be.exactly("securingsincity/backbone-react-ui");
      done();
    })
  });

  it('project with no projectId should fail', function() {

    var codeShip = new CodeShip({
      apiKey : process.env.API_KEY
    });
    var thrower = function () {
      codeShip.project(null,function (response) {});
    }
     thrower.should.throw();
  });
  it('buildRestart with no buildId should fail', function() {

    var codeShip = new CodeShip({
      apiKey : process.env.API_KEY
    });
    var thrower = function () {
      codeShip.buildRestart(null,function (response) {});
    }
     thrower.should.throw();
  });
  it('buildRestart with valid build id should work', function(done) {

    var codeShip = new CodeShip({
      apiKey : process.env.API_KEY
    });

    codeShip.buildRestart(3561004,function (response) {
      response.id.should.be.exactly(3561004);
      response.project_id.should.be.exactly(54507);
      response.status.should.be.exactly('testing');
      response.github_username.should.be.exactly('securingsincity');
      done();
    });
    
  });
});