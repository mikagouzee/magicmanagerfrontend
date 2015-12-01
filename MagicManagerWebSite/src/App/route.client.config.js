angular.module(
  "magicManagerApp.routes",
 [
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
 