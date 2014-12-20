'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var TemplateGenerator = module.exports = function TemplateGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the template subgenerator with the argument ' + this.name + '.');
};

util.inherits(TemplateGenerator, yeoman.generators.NamedBase);

TemplateGenerator.prototype.files = function files() {
  var name = this.name;
  this.write('app/scripts/templates/'+ name +'.tmpl.html', 

    '<!-- Directive template for '+name+' -->\n'
  );
};
