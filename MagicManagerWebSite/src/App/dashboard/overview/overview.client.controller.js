angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    'magicManagerApp.charts.factory',
    'magicManagerApp.market.factory',
    'magicManagerApp.stock.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (stockFactory,marketFactory,chartsFactory) {
  var vm = this;
  
  init();
  
  function init () {
    
    chartsFactory.generateChart(marketFactory.getMarketInfo(),'marketoverview','fr_fr')
      .then(setMarketChart);
    
    chartsFactory.generateChart(stockFactory.getStockInfo(),'stockoverview','fr_fr')
      .then(setStockChart);
    
    function setMarketChart (marketChart) {
      vm.marketChart = marketChart;
    };
    
    function setStockChart (stockChart) {
      vm.stockChart = stockChart;
    };
    
  }
    
}