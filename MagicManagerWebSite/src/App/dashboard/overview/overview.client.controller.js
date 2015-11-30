angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (dashboardFactory) {
  var vm = this;
  
  init();
  
  function init () {
    
    dashboardFactory.getChart('market','marketoverview','fr_fr').then(setMarketChart);
    dashboardFactory.getChart('stock','stockoverview','fr_fr').then(setStockChart);
    
    function setMarketChart (marketChart) {
     
        vm.marketChart = marketChart;

    };
    
    function setStockChart (stockChart) {

        vm.stockChart = stockChart;

    }
    
  }
    
}