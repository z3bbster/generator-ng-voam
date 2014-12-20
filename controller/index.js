'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the controller subgenerator with the argument ' + this.name + '.');
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/controllers/'+ name +'Ctrl.js', 
    '/**\n'+
    ' * '+name+' [Controller] a Controller.\n'+
    ' */\n'+
  	'app.controller("'+name+'Ctrl", [\n'+
  	'	"$scope",\n'+
  	'	function($scope){\n'+
  	'		$scope.message = "Hello world!";\n'+
  	'}]);'
  );
};
