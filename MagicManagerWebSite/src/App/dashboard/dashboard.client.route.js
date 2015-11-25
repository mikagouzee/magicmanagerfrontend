angular.module(
  'magicManagerApp.dashboard.routes',
  [
    'magicManagerApp.templates',
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
          }
        }
      )
      .state(
        'dashboard.market',
        {
          url: '/market', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/market/market.client.view.html');
         }
        }
      )
      .state(
        'dashboard.stock',
        { 
          url: '/stock', 
          templateProvider: function($templateCache){
            return $templateCache.get('dashboard/stock/stock.client.view.html');
          }
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