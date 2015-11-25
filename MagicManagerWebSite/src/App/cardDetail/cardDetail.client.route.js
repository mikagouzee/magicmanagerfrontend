angular.module(
    "magicManagerApp.cardDetail.routes",
    ["magicManagerApp.cardDetail.controller",
        "ui.router"]
    ).config(cardDetailRoute);

//todo : add templates when location find
function cardDetailRoute($stateProvider) {
    $stateProvider.state(
        "cardDetail",
        {
            url: "/cardDetail/:articleId", templateUrl: "",
            controller: "cardDetailController", controllerAs: "cardDetail"
        }
        )
}