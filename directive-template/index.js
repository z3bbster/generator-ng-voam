'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var DirectiveTemplateGenerator = module.exports = function DirectiveTemplateGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the directive-template subgenerator with the argument ' + this.name + '.');
};

util.inherits(DirectiveTemplateGenerator, yeoman.generators.NamedBase);

DirectiveTemplateGenerator.prototype.files = function files() {
  var name = this.name;
  //
  this.write('app/scripts/directives/'+ name +'.js', 
    '/**\n'+
    ' * '+name+' [directive] a simple directive.\n'+
    ' */\n'+
	'app.directive("'+name+'", [function () {\n'+
	'	return {\n'+
	'		restrict: "E",  // E = Element, A = Attribute, C = Class, M = Comment\n'+
	'		templateUrl: "scripts/templates/'+ name+'.tmpl.html",\n'+
	'		//controller: function($scope, $element, $attrs, $transclude) {},\n'+
	'		link: function (scope, iElement, iAttrs) {\n'+
	'	\n'+		
	'		}\n'+
	'	};\n'+
	'}]);'
  );
  // create *.tmpl.html template file
  this.write('app/scripts/templates/'+ name +'.tmpl.html', 
    '<!-- HTML template for '+name+' directive -->\n'
  );  
};

