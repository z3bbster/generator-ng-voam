'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ConstantGenerator = module.exports = function ConstantGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the constant subgenerator with the argument ' + this.name + '.');
};

util.inherits(ConstantGenerator, yeoman.generators.NamedBase);

ConstantGenerator.prototype.files = function files() {
	var name = this.name;
  this.write('app/scripts/services/'+ name +'.js', 
		'/**\n'+
		' * '+name+' [constant] registers a primitive, object instance.\n'+
		' */\n'+
  	'app.constant("'+name+'", {});'
  );
};
