angular.module(
    "magicManagerApp.home.routes",
    ["ui.router"]
    ).config(homeRoute);

function homeRoute($stateProvider) {
    $stateProvider.state(
        "home",
        {url:"/home", templateUrl:""}
        )
}