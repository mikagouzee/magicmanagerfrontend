angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    'magicManagerApp.charts.factory',
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (dashboardFactory,chartsFactory) {
  var vm = this;
  
  init();
  
  function init () {
    
    dashboardFactory.getInfo('market').then(generateMarketChart);
    dashboardFactory.getInfo('stock').then(generateStockChart);
    
    function generateMarketChart (marketData) {
      
      chartsFactory.generateChart(marketData,'marketoverview','fr_fr')
        .then(setMarketChart);
      
      function setMarketChart (marketChart) {
        vm.marketChart = marketChart;
      };
      
    };
    
    function generateStockChart (stockData) {
      
      chartsFactory.generateChart(stockData,'stockoverview','fr_fr')
        .then(setStockChart);
      
      function setStockChart (stockChart) {
        vm.stockChart = stockChart;
      };
      
    }
    
  }
    
}