angular.module(
  "magicManagerApp.routes",
 [
   "ui.router"
 ]
)
  .config(
    function($urlRouterProvider,$locationProvider){
      $urlRouterProvider.otherwise("/home");
      $locationProvider.hashPrefix("!");
    }
)
 