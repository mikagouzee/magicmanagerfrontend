//the main route module
angular.module(
  "magicManagerApp.routes",
 [
   //load ui-router
   //The de-facto solution to flexible routing with nested views in AngularJS
   //https://github.com/angular-ui/ui-router/
   "ui.router"
 ]
)
  .config(
    function($urlRouterProvider,$locationProvider){
      //define the default route if no route is given
      $urlRouterProvider.otherwise("/home");
      //add a ! to the url hashprefix for search engine optimization
      $locationProvider.hashPrefix("!");
    }
)
 