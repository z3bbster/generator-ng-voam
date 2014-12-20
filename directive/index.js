'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var DirectiveGenerator = module.exports = function DirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the directive subgenerator with the argument ' + this.name + '.');
};

util.inherits(DirectiveGenerator, yeoman.generators.NamedBase);

DirectiveGenerator.prototype.files = function files() {
  var name = this.name;
  //
  this.write('app/scripts/directives/'+ name +'.js', 

    '/**\n'+
    ' * '+name+' [directive] a simple directive.\n'+
    ' */\n'+
	'app.directive("'+name+'", [function () {\n'+
	'	return {\n'+
	'		restrict: "A",  // E = Element, A = Attribute, C = Class, M = Comment\n'+
	'		link: function (scope, iElement, iAttrs) {\n'+
	'	\n'+		
	'		}\n'+
	'	};\n'+
	'}]);'
  );
};

