angular.module(
    "magicManagerApp.home.routes",
    [
      "ui.router"
    ]
)
  .config(homeRoute);

function homeRoute($stateProvider) {
    $stateProvider.state(
        "home",
        {
          url:"/home", 
          templateProvider: function($templateCache){
            return $templateCache.get("home/home.client.view.html");
          }
        }
     )
}