'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FilterGenerator = module.exports = function FilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the filter subgenerator with the argument ' + this.name + '.');
};

util.inherits(FilterGenerator, yeoman.generators.NamedBase);

FilterGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/filters/'+ name +'.js', 
    '/**\n'+
    ' * '+name+' [Filter] a Filter.\n'+
    ' */\n'+
  	'app.filter("'+name+'",[ function(){\n'+
  	'	return function (input) {;\n'+
  	'		return "'+name+' filter:"  + input;\n'+
  	'	};\n'+
  	'}]);'
  );
};
