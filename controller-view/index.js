'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ControllerViewGenerator = module.exports = function ControllerViewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the controller-view subgenerator with the argument ' + this.name + '.');
};

util.inherits(ControllerViewGenerator, yeoman.generators.NamedBase);

ControllerViewGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/views/'+ name +'.html', 

    '<!-- '+name+' VIEW html template -->\n'
  );
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
