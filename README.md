# generator-ng-voam [![Build Status](https://secure.travis-ci.org/z3bbster/generator-ng-voam.png?branch=master)](https://travis-ci.org/z3bbster/generator-ng-voam) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/z3bbster/voam?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> NG-VOAM - AngularJS Versatile Online Application Manager, a SPA webapp generator for [Yeoman](http://yeoman.io). The one stopshop with over 20+ predefined grunt tasks for development and production phase. Additionally it will offer 13 great AngularJS specific sub-generators to work with in your project.

**Bower dependecies**
+ jquery
+ bootstrap
+ angular
+ angular-animate
+ angular-cookies
+ angular-loader
+ angular-resource
+ angular-cookies
+ angular-sanitize
+ angular-touch
+ angular-ui-router
+ font-awesome


## :wrench: Getting Started

1. Install [Yeoman](http://yeoman.io), if you don't already have:
`$ npm install -g yo`
2. Install generator-ng-voam:
`$ npm install -g generator-ng-voam`
3. Create new directory, and `cd` into it:
`$ mkdir my-new-project && cd $_`
4. Initiate the generator: 
`$ yo ng-voam`
5. Follow the instructions
6. :100: Done! You just created your new AngularJS project

After everything went correctly it should have created a basic project file and folder structure, in your "my-new-project" folder like this:
```
|   .bowerrc
|   .editorconfig
|   .gitignore
|   .jshintrc
|   bower.json
|   Gruntfile.js
|   package.json
|   README.md
|   
\---app
    |   index.html
    |   
    +---assets
    |   +---fonts
    |   +---img
    |   \---vector
    +---bower_components
    +---less
    |       base.less
    |       
    +---scripts
    |   |   test.js
    |   |   
    |   +---controllers
    |   +---directives
    |   +---filters
    |   +---services
    |   +---templates
    |   \---views
    \---styles
```

### :balloon: Using the sub-generators

the AngularJS specific sub-generators below you can use after the initial scaffolding:

+ **constant** - `$ yo ng-voam:contstant "constant-name"`
+ **controller** - `$ yo ng-voam:controller "controller-name"`
+ **controller-view** - `$ yo ng-voam:controller-view "controller-view-name"`
+ **directive** - `$ yo ng-voam:directive "constant-name"`
+ **directive-template** - `$ yo ng-voam:directive-template "directive-template-name"`
+ **directive-verbose** - `$ yo ng-voam:directive-verbose "directive-verbose-name"`
+ **factory** - `$ yo ng-voam:factory "factory-name"`
+ **filter** - `$ yo ng-voam:filter "filter-name"`
+ **provider** - `$ yo ng-voam:provider "provider-name"`
+ **service** - `$ yo ng-voam:service "service-name"`
+ **template** - `$ yo ng-voam:template "template-name"`
+ **value** - `$ yo ng-voam:value "value-name"`
+ **view** - `$ yo ng-voam:view "view-name"`
+ **view-controller** - `$ yo ng-voam:view-controller "view-controller-name"`

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## :postbox: Bug tracker

Have a bug, enhancement, idea or question? Please create an issue here on GitHub!

https://github.com/z3bbster/generator-ng-voam/issues

## :busts_in_silhouette: Authors

**z3bbster**

+ http://github.com/z3bbster

## :mega: Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Create new Pull Request

### Install Grunt

[Download and install node.js 0.8.0+](http://nodejs.org/download/) before proceeding. From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/Wassup` directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js.

## :hammer: Copyright and license

Code and documentation copyright 2011-2014 z3bbster. Code released under the [MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

