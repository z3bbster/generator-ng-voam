'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ProviderGenerator = module.exports = function ProviderGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the provider subgenerator with the argument ' + this.name + '.');
};

util.inherits(ProviderGenerator, yeoman.generators.NamedBase);

ProviderGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/services/'+ name +'.js', 

    '/**\n'+
    ' * '+name+' [provider] registers a service configurable provider.\n'+
    ' */\n'+
  	'app.service("'+name+'", function(){\n'+
		'	var privateName = "Default man";\n'+
		'	return {\n'+
		'		setName: function (name) {\n'+
		'	  	privateName = name;\n'+
		'	  },\n'+
		'	  $get: function () {\n'+
		'	    return {\n'+
		'	      name: privateName\n'+
		'	    };\n'+
		'	  }\n'+
		'	};\n'+
		'});'
  );
};
