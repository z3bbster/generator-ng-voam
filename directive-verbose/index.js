'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var DirectiveVerboseGenerator = module.exports = function DirectiveVerboseGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the directive-verbose subgenerator with the argument ' + this.name + '.');
};

util.inherits(DirectiveVerboseGenerator, yeoman.generators.NamedBase);

DirectiveVerboseGenerator.prototype.files = function files() {
  var name = this.name;
  //
  this.write('app/scripts/directives/'+ name +'.js', 
    '/**\n'+
    ' * '+name+' [directive] a verbose directive.\n'+
    ' */\n'+
	'app.directive("'+name+'", [function () {\n'+
	'	return {\n'+
	'		// name: "",\n'+
	'		// priority: 1,\n'+
	'		// terminal: true,\n'+
	'		// scope: {}, // {} = isolate, true = child, false/undefined = no change\n'+
	'		// controller: function($scope, $element, $attrs, $transclude) {},\n'+
	'		// require: "ngModel", // Array = multiple requires, ? = optional, ^ = check parent elements\n'+
	'		// restrict: "A", // E = Element, A = Attribute, C = Class, M = Comment\n'+
	'		// template: "",\n'+
	'		// templateUrl: "",\n'+
	'		// replace: true,\n'+
	'		// transclude: true,\n'+
	'		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),\n'+
	'		link: function (scope, iElement, iAttrs, controller) {\n'+
	'	\n'+		
	'		}\n'+
	'	};\n'+
	'}]);'
  );
};
