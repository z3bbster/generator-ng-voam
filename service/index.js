'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ServiceGenerator = module.exports = function ServiceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the service subgenerator with the argument ' + this.name + '.');
};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

ServiceGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/services/'+ name +'.js', 
    '/**\n'+
    ' * '+name+' [service] registers a service.\n'+
    ' */\n'+
  	'app.service("'+name+'", function(){\n'+
  	'   this.message = "Hello world!";\n'+
  	'});'
  );
};
