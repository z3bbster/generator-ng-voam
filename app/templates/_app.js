/* inline cooment */
var app = angular.module('moduleName', [
	'ui.router'
	]);
///////////////////////////////////
// Do stuff before the app loads //
///////////////////////////////////
app.config([
	'$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		// Use $stateProvider to configure your states.
      	$stateProvider
      	.state("home", {
          // Use a url of "/" to set a states as the "index".
          url: "/",
          // Example of an inline template string. By default, templates
          // will populate the ui-view within the parent state's template.
          // For top level states, like this one, the parent template is
          // the index.html file. So this template will be inserted into the
          // ui-view within index.html.
          template: '<p class="lead">Welcome to the UI-Router Demo</p>'
        })
        .state("about", {
          url: "/about",
          template: '<p class="lead">This is the about page</p>'
        });
	}
]);
////////////////////////////////////
// Do stuff when finished loading //
////////////////////////////////////
app.run([function () {
	
}]);

