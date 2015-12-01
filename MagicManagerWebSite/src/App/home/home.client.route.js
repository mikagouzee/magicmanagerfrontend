//the homepage routing module
angular.module(
    "magicManagerApp.home.routes",
    [
      "ui.router"
    ]
)
  .config(homeRoute);

function homeRoute($stateProvider) {
    $stateProvider.state(
        //declare the home staate
        "home",
        {
          //the url of the home state
          url:"/home", 
          // get the html partial for the home page from $templateCache
          templateProvider: function($templateCache){
            return $templateCache.get("home/home.client.view.html");
          }
        }
     )
}