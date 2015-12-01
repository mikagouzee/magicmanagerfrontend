angular.module(
  'magicManagerApp.dashboard.routes',
  [
    //load the gulp generated $templateCache module
    'magicManagerApp.templates',
    //load the controller for the overview dashboard
    'magicManagerApp.dashboard.overview.controller',
    //load the controller for the market dashboard
    'magicManagerApp.dashboard.market.controller',
    //load the controller for the stock dashboard
    'magicManagerApp.dashboard.stock.controller',
    //load ui-router
    //The de-facto solution to flexible routing with nested views in AngularJS
    //https://github.com/angular-ui/ui-router/
    'ui.router'
  ]
)
  .config(dashboardRoute);

//the route setup for the dashboards
function dashboardRoute($stateProvider) {
    $stateProvider
      .state(
        //the main dashboard state with the sidebar in wich other views are loaded
        'dashboard',
        {
          //the base url of the dashboards
          url: '/dashboard', 
           //the template with the sidebar and the child view from $templateCache
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/dashboard.client.view.html');
          }
        }
      )
      .state(
        //the dashboard overview state wich is a child of the dashboard state
        'dashboard.overview',
        {
          //the url appended to the dashboard state url
          url: '/overview', 
          //the child state template from $templateCache
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/overview/overview.client.view.html');
          },
          //the controller for the dashboard overview
          controller:'dashboardOverviewController',
          //the name of the controller object in the dashboard overview view
          controllerAs:'dashboardOverview'
        }
      )
      .state(
        //the dashboard market state wich is a child of the dashboard state
        'dashboard.market',
        {
          //the url appended to the dashboard state url
          url: '/market', 
          //the child state template from $templateCache
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/market/market.client.view.html');
          },
          //the controller for the market dashboard
          controller:'dashboardMarketController',
          //the name of the controller object in the market dashboard view
          controllerAs:'dashboardMarket'
        }
      )
      .state(
         //the dashboard stock state wich is a child of the dashboard state
        'dashboard.stock',
        { 
          //the url appended to the dashboard state url
          url: '/stock', 
          //the child state template from $templateCache
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/stock/stock.client.view.html');
          },
           //the controller for the stock dashboard
          controller:'dashboardStockController',
           //the name of the controller object in the stock dashboard view
          controllerAs:'dashboardStock'
        }
      )
      .state(
         //the dashboard export state wich is a child of the dashboard state
        'dashboard.export',
        { 
          //the url appended to the dashboard state url
          url: '/export', 
          //the child state template from $templateCache
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/export/export.client.view.html');
          }
        }
      )

}