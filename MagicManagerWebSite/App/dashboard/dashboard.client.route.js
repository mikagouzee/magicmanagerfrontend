angular.module(
    "magicManagerApp.dashboard.routes",
    ["ui.router"]
    ).config(dashboardRoute);

//todo : add templates when location find
function dashboardRoute($stateProvider) {
    $stateProvider.state(
        "dashboard",
        { url: "/dashboard", templateUrl: "App/dashboard/dashboard.view.html" }
        ).state(
        "dashboard.overview",
        {url: "/overview", templateUrl: "App/dashboard/overview/overview.view.html" }
        ).state(
        "dashboard.market",
        { url: "/market", templateUrl: "App/dashboard/market/market.view.html" }
        ).state(
        "dashboard.stock",
        { url: "/stock", templateUrl: "App/dashboard/stock/stock.view.html" }
        ).state(
        "dashboard.export",
        { url: "/export", templateUrl: "App/dashboard/export/export.view.html" }
        )

}