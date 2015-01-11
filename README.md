#Node-Codeship

[![Coverage Status](https://coveralls.io/repos/securingsincity/node-codeship/badge.png)](https://coveralls.io/r/securingsincity/node-codeship)
[![Build Status](https://travis-ci.org/securingsincity/node-codeship.svg?branch=master)](https://travis-ci.org/securingsincity/node-codeship)

An API wrapper for codeship

##Install
`npm install node-codeship`

##Instantiate

```
var CodeShip = require('node-codeship');

var codeShip = new CodeShip({
  apiKey : YOUR_API_KEY
});

```

##Commands

###Projects

Retrieve all projects

```
codeShip.projects(function(response) {
  // your projects : response.projects
})
```


###Project

Retrieve a specific project

```
codeShip.projects(projectId,function(response) {
  // your project
})
```


###Build Restart

```
codeShip.buildRestart(buildId,function (response) {
  //build started
});
```
