/**
 *  generator-ng-voam - [VOAM] Versatile Online Application Manager yeoman generator AngularJS
 */
'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NgVoamGenerator = module.exports = function NgVoamGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NgVoamGenerator, yeoman.generators.Base);


/* 1. WARM-WELCOME */
NgVoamGenerator.prototype.warmWelcome = function warmWelcome() {
  
  // have Yeoman greet the user.
  console.log(this.yeoman);

  // display ng-voam info
  console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
  console.log('  [NG-VOAM] AngularJS specific yeoman generator - v.0.0.1B by z3bbster');
  console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
  console.log('Before we start we certainly need to know some project specific questions. ');
  console.log('------------------------------------------------------------------------------');
  console.log('');
  
};

/* 2. askForProjectInfo 
    https://github.com/SBoudrias/Inquirer.js/tree/master/examples

*/ 
NgVoamGenerator.prototype.askForProjectInfo = function askForProjectInfo() {

  var cb = this.async();

  var prompts = [
    // Question 1
    {
      name: 'applicationName',
      message: 'What would be the name of your new AngularJs application/project?',
      default: 'myApp'
    },
    // Question 2
    {
      name: 'githubUsername',
      message: 'What is your github username?'
    },
    // Question 3
    {
      name: 'projectDescription',
      message: 'What is your app about? Give a short decscription about your application and its functionality.'
    },
    // Question 4
    {
      type: "list",
      name: "projectLicense",
      message: "What code license will this new application have?",
      choices: [ "Apache", "BSD2", "BSD3", "GPLv2", "GPLv3", "MIT" ],
      filter: function( val ) { return val.toLowerCase(); }
    },
    {
      type: "list",
      name: "ngVersion",
      message: "What version of AngularJs you want to use?",
      choices: [ "1.2.16", "1.2.15", "1.2.14", "1.3.0-beta.10", "1.3.0-beta.9", "1.3.0-beta.8" ],
      filter: function( val ) { return val.toLowerCase(); }
    },
    {
      type: "confirm",
      name: "useUiRouter",
      message: "Do you want to use ui-router instead of angular-route?",
      default: true
    },
    {
      type: "checkbox",
      name: "ngExtras",
      message: "Select here which other AngularJs package you want to use?",
      choices: [
        { name: "angular-animate" },
        { name: "angular-cookies" },
        { name: "angular-csp.css" },
        { name: "angular-loader" },
        { name: "angular-mocks" },
        { name: "angular-resource" },
        { name: "angular-route" },
        { name: "angular-sanitize" },
        { name: "angular-scenario" },
        { name: "angular-touch" }
      ]
    }
  ];

  this.prompt(prompts, function (props) {
    this.appName = props.applicationName;
    this.githubUsername = props.githubUsername;
    this.projectDescription = props.projectDescription;
    this.projectLicense = props.projectLicense;
    this.ngVersion = props.ngVersion;
    this.useUiRouter = props.useUiRouter;
    cb();
  }.bind(this));
};



/* 2. askForProjectname */ 
/*NgVoamGenerator.prototype.askForProjectname = function askForProjectname() {

  var cb = this.async();

  var prompts = [
  {
    name: 'applicationName',
    message: 'What would be the name of your AngularJs new application/project?'
  }
  ];

  this.prompt(prompts, function (props) {
    this.appName = props.applicationName;
    cb();
  }.bind(this));
};

// 3. askForGithubUsername
NgVoamGenerator.prototype.askForGithubUsername = function askForGithubUsername() {

  var cb = this.async();

  var prompts = [{
    name: 'githubUsername',
    message: 'What is your github username?'
  }];

  this.prompt(prompts, function (props) {
    this.githubUsername = props.githubUsername;
    cb();
  }.bind(this));

};

// 4. askForDescription
NgVoamGenerator.prototype.askForDescription = function askForDescription() {

  var cb = this.async();

  var prompts = [{
    name: 'projectDescription',
    message: 'What is your app about? Give a short decscription about your application and its functionality.'
  }];

  this.prompt(prompts, function (props) {
    this.projectDescription = props.projectDescription;
    cb();
  }.bind(this));

};

// 5. ask for the license type for the project
NgVoamGenerator.prototype.askForLicense = function askForLicense() {

  var cb = this.async();

  var prompts = [{
    name: 'projectLicense',
    message: 'What license will the application have? eg. Apache, BSD2, BSD3, GPLv2, GPLv3, MIT.'
  }];

  this.prompt(prompts, function (props) {
    this.projectLicense = props.projectLicense;
    cb();
  }.bind(this));

};*/

// 6. create folder structure
NgVoamGenerator.prototype.createFolderStructure = function createFolderStructure() {
  
  this.mkdir('app');
  this.mkdir('app/bower_components');
  this.mkdir('app/scripts');
  this.mkdir('app/scripts/directives');
  this.mkdir('app/scripts/filters');
  this.mkdir('app/scripts/services');
  this.mkdir('app/scripts/services');
  this.mkdir('app/assets/fonts');
  this.mkdir('app/assets/img');
  this.mkdir('app/assets/vector');
  this.mkdir('app/less');
  this.mkdir('app/styles');

};

// 7. Copy all application related files
NgVoamGenerator.prototype.copyAppFiles = function copyAppFiles() {

  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_method1.js', 'app/scripts/method1.js');
  this.copy('_method2.js', 'app/scripts/method2.js');

};

// 8. Copy all project related files
NgVoamGenerator.prototype.copyProjectFiles = function copyProjectFiles() {

  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('bowerrc', '.bowerrc');
  this.copy('_.gitignore', '.gitignore');

};

// 9. Create the README.md for github and/or documentation purpose
NgVoamGenerator.prototype.createReadme = function createReadme() {

  var app = this.appName,
      author = this.githubUsername,
      desc = this.projectDescription,
      license = this.projectLicense;

  this.write('README.md',

    '#[' + app + '](http://' + author + '.github.io/' + app + '/) [![Build Status](https://secure.travis-ci.org/' + author + '/' + app + '.png?branch=master)](https://travis-ci.org/' + author + '/' + app + ')\n\n'+

    desc + '\n\n'+

    "[Quick start](#quick-start) | [Bug tracker](#bug-tracker) | [Authors](#authors) | [Contributing](#contributing) | [License](#copyright-and-license)\n\n"+

    "## Quick start\n\n"+

    "All available quick start options:\n\n"+

    "+ Clone the repo: `git clone git@github.com:" + author + "/" + app + ".git`.\n"+
    "+ Download the latest [release](https://github.com/" + author + "/" + app + "/zipball/master).\n"+
    "+ Clone in [Desktop](github-windows://openRepo/https://github.com/" + author + "/" + app + ").\n"+
    "+ Install with [Bower](http://bower.io): `bower install " + app + "`.\n\n"+

    "## Bug tracker\n\n"+

    "Have a bug, enhancement, idea or question? Please create an issue here on GitHub!\n\n"+

    "[https://github.com/" + author + "/" + app + "/issues](https://github.com/" + author + "/" + app + "/issues)\n\n"+

    "## Authors\n\n"+

    "**" + author + "**\n\n"+

    "+ [http://github.com/" + author + "](http://github.com/" + author + ")\n\n"+

    "## Contributing\n\n"+

    "### Install Grunt\n\n"+

    "[Download and install node.js 0.8.0+](http://nodejs.org/download/) before proceeding. From the command line:\n\n"+

    "1. Install `grunt-cli` globally with `npm install -g grunt-cli`.\n"+
    "2. Navigate to the root `/" + app + "` directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.\n\n"+

    "When completed, you'll be able to run the various Grunt commands provided from the command line.\n\n"+

    "**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js.\n\n"+

    "### Contribute a new feature\n\n"+

    "1. Fork it\n"+
    "2. Create your feature branch: `git checkout -b my-new-feature`\n"+
    "3. Commit your changes: `git commit -am 'Add some feature'`\n"+
    "4. Push to the branch: `git push origin my-new-feature`\n"+
    "5. Create new Pull Request\n\n"+

    "## Copyright and license\n\n"+

    "Code and documentation copyright 2014 " + author + ". Code released under the [" + license + " license](https://github.com/" + author + "/"+ app + "/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/" + author + "/" + app + "/blob/master/docs/LICENSE)."
  );
};

// 10. create package.json
NgVoamGenerator.prototype.createPackage = function createPackage() {

  var app = this.appName,
      author = this.githubUsername,
      desc = this.projectDescription,
      license = this.projectLicense;

  var data = {
    "name": app,
    "version": "0.0.1",
    "description": desc,
    "main": "index.html",
    "scripts": {
      "test": ""
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/" + author + "/" + app
    },
    "keywords": [
      "angular",
      "yeoman",
      app
    ],
    "author": author,
    "license": license,
    "dependencies": {},
    "devDependencies": {
      "grunt": "~0.4.1",
      "grunt-contrib-copy": "~0.4.1",
      "grunt-contrib-concat": "~0.3.0",
      "grunt-contrib-coffee": "~0.7.0",
      "grunt-contrib-uglify": "~0.2.0",
      "grunt-contrib-compass": "~0.5.0",
      "grunt-contrib-jshint": "~0.6.0",
      "grunt-contrib-less": "~0.11.0",
      "grunt-contrib-cssmin": "~0.6.0",
      "grunt-contrib-connect": "~0.5.0",
      "grunt-contrib-clean": "~0.5.0",
      "grunt-contrib-compress": "~0.9.1",
      "grunt-contrib-htmlmin": "~0.1.3",
      "grunt-contrib-imagemin": "~0.2.0",
      "grunt-contrib-watch": "~0.5.2",
      "grunt-autoprefixer": "~0.2.0",
      "grunt-usemin": "~0.1.11",
      "grunt-svgmin": "~0.2.0",
      "grunt-rev": "~0.1.0",
      "grunt-concurrent": "~0.3.0",
      "load-grunt-tasks": "~0.1.0",
      "grunt-google-cdn": "~0.2.0",
      "grunt-ngmin": "~0.0.2",
      "time-grunt": "~0.1.0",
      "karma-ng-scenario": "~0.1.0",
      "grunt-karma": "~0.8.3",
      "karma": "~0.12.16",
      "karma-ng-html2js-preprocessor": "~0.1.0"
    }
  };
  this.write('package.json', JSON.stringify(data));
};

// 11. create bower.json
NgVoamGenerator.prototype.createBower = function createBower(){

  var app = this.appName,
      author = this.githubUsername,
      desc = this.projectDescription,
      license = this.projectLicense;

  var bower = {
    "name": app,
    "version": "0.0.1",
    "dependencies": {
      "jquery": "~1.9.1",
      "bootstrap": "~3.1.1",
      "angular": "~1.2.16",
      "angular-animate": "~1.2.16",
      "angular-cookies": "~1.2.16",
      "angular-loader": "~1.2.16",
      "angular-resource": "~1.2.16",
      "angular-sanitize": "~1.2.16",
      "angular-touch": "~1.2.16",
      "angular-ui-router": "~0.2.10",
      "font-awesome": "~4.1.0"
    }
  };
  
  this.write('bower.json', JSON.stringify(bower));
}

// 12. create the main index.html
NgVoamGenerator.prototype.createIndex = function createIndex() {

    var app = this.appName,
      author = this.githubUsername,
      desc = this.projectDescription,
      license = this.projectLicense;

  this.write('app/index.html',
    "<!--  " + app + " AngularJS Application -->\n"+
    "<!doctype html>\n"+
    "<html lang=\"en\" ng-app=\"" + app + "App\">\n"+
    "<head>\n"+
    "  <meta charset=\"UTF-8\">\n"+
    "  <title>" + app + "</title>\n"+
    "  <meta name=\"description\" content=\"" + desc + "\">\n"+
    "  <meta name=\"viewport\" content=\"width=device-width\">\n"+
    "  <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->\n"+
    "  <!-- build:css styles/vendor.css -->\n"+
    "  <!-- bower:css -->\n"+
    "  <link rel=\"stylesheet\" href=\"bower_components/bootstrap/dist/css/bootstrap.min.css\">\n"+
    "  <link rel=\"stylesheet\" href=\"bower_components/bootstrap/dist/css/bootstrap-theme.min.css\">\n"+
    "  <link rel=\"stylesheet\" href=\"bower_components/font-awesome/css/font-awesome.min.css\">\n"+
    "  <!-- endbower -->\n"+
    "  <!-- endbuild -->\n"+
    "  <!-- build:css(.tmp) styles/main.css -->\n"+
    "  <link rel=\"stylesheet\" href=\"styles/main.css\">\n"+
    "  <!-- endbuild -->\n"+
    "</head>\n"+
    "<body>\n"+
    "  <div class=\"container\">\n"+
    "    <ui-view></ui-view>\n"+
    "  </div>\n"+
    "  <!-- build:js scripts/vendor.js -->\n"+
    "  <!-- bower:js -->\n"+
    "  <script src=\"bower_components/jquery/jquery.min.js\"></script>\n"+
    "  <script src=\"bower_components/bootstrap/dist/js/bootstrap.min.js\"></script>\n"+
    "  <script src=\"bower_components/angular/angular.min.js\"></script>\n"+
    "  <script src=\"bower_components/angular-ui-router/release/angular-ui-router.min.js\"></script>\n"+
    "  <!-- endbower -->\n"+
    "  <!-- endbuild -->\n"+
    "  <!-- build:js scripts/app.js -->\n"+
    "  <script src=\"scripts/app.js\"></script>\n"+
    "  <script src=\"scripts/method1.js\"></script>\n"+
    "  <script src=\"scripts/method2.js\"></script>\n"+
    "  <!-- endbuild -->\n"+
    "  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->\n"+
    "  <script></script>\n"+
    "</body>\n"+
    "</html>"
  );
};

// 13. Create app.js file
NgVoamGenerator.prototype.createAppJs = function createAppJs() {

  var app = this.appName,
      author = this.githubUsername,
      desc = this.projectDescription,
      license = this.projectLicense;

  this.write('app/scripts/app.js',
    "/* " + app + " app.js file */\n"+

"var app = angular.module('" + app + "App', [\n"+
"  'ui.router'\n"+
"  ]);\n"+
"///////////////////////////////////\n"+
"// Do stuff before the app loads //\n"+
"///////////////////////////////////\n"+
"app.config([\n"+
"  '$stateProvider', '$urlRouterProvider',\n"+
"  function ($stateProvider, $urlRouterProvider) {\n"+
"    // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise)\n"+
"    $urlRouterProvider\n"+
"    .when('/help', '/about')\n"+
"    .otherwise('/');\n"+
"    // Use $stateProvider to configure your states.\n"+
"    $stateProvider\n"+
"    .state(\"home\", {\n"+
"      // Use a url of "/" to set a states as the \"index\".\n"+
"      url: \"/\",\n"+
"      // Example of an inline template string. By default, templates\n"+
"      // will populate the ui-view within the parent state's template.\n"+
"      // For top level states, like this one, the parent template is\n"+
"      // the index.html file. So this template will be inserted into the\n"+
"      // ui-view within index.html.\n"+
"      template: '<p class=\"lead\">Welcome to the " + app + " AngularJs & UI-Router Demo</p><ul><li><a href=\"#/about\">Alice</a></li></ul>'\n"+
"    })\n"+
"    .state(\"about\", {\n"+
"      url: \"/about\",\n"+
"      template: '<p class=\"lead\">" + desc + "</p>'\n"+
"    });\n"+
"  }\n"+
"]);\n"+
"////////////////////////////////////\n"+
"// Do stuff when finished loading //\n"+
"////////////////////////////////////\n"+
"app.run([function () {\n"+
"  \n"+
"}]);"



  );

};

// 14. Create base.less file
NgVoamGenerator.prototype.createLess = function createLess() {

  this.write('app/less/main.less',
    '// ' + this.appName + ' LESS STYLESHEET - will be compiled to "styles/main.css"\nbody{ background-color: green; \n margin-top: 20px;}');

};



