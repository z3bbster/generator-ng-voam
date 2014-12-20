'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ValueGenerator = module.exports = function ValueGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the value subgenerator with the argument ' + this.name + '.');
};

util.inherits(ValueGenerator, yeoman.generators.NamedBase);

ValueGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/services/'+ name +'.js', 
		'/**\n'+
		' * '+name+' [value] registers a primitive, existing object instance or function.\n'+
		' */\n'+
  	'app.value("'+name+'", {});'
  );
};
