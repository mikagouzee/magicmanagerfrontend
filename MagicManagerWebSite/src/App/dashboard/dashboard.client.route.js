angular.module(
  'magicManagerApp.dashboard.routes',
  [
    'magicManagerApp.templates',
    'magicManagerApp.dashboard.overview.controller',
    'magicManagerApp.dashboard.market.controller',
    'magicManagerApp.dashboard.stock.controller',
    'ui.router'
  ]
)
  .config(dashboardRoute);

function dashboardRoute($stateProvider) {
    $stateProvider
      .state(
        'dashboard',
        {
          url: '/dashboard', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/dashboard.client.view.html');
          }
        }
      )
      .state(
        'dashboard.overview',
        {
          url: '/overview', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/overview/overview.client.view.html');
          },
          controller:'dashboardOverviewController',
          controllerAs:'dashboardOverview'
        }
      )
      .state(
        'dashboard.market',
        {
          url: '/market', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/market/market.client.view.html');
          },
          controller:'dashboardMarketController',
          controllerAs:'dashboardMarket'
        }
      )
      .state(
        'dashboard.stock',
        { 
          url: '/stock', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/stock/stock.client.view.html');
          },
          controller:'dashboardStockController',
          controllerAs:'dashboardStock'
        }
      )
      .state(
        'dashboard.export',
        { 
          url: '/export', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/export/export.client.view.html');
          }
        }
      )

}