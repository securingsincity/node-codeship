var _ = require('lodash'),
 CodeShip = require('..');
require('should');

describe('Code ship ci api test suite', function () {
  it('expects an api key', function () {
    var thrower = function () {
        new CodeShip();
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
});