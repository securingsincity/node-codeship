#Node-Codeship

[![Coverage Status](https://coveralls.io/repos/securingsincity/node-codeship/badge.png)](https://coveralls.io/r/securingsincity/node-codeship)
[![Build Status](https://travis-ci.org/securingsincity/node-codeship.svg?branch=master)](https://travis-ci.org/securingsincity/node-codeship)
[ ![Codeship Status for securingsincity/node-codeship](https://codeship.com/projects/40e0bf80-7c0b-0132-a8a1-5e0abf46f2b9/status?branch=master)](https://codeship.com/projects/56348)

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
