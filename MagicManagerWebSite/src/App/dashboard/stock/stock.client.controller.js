angular.module(
  'magicManagerApp.dashboard.stock.controller', 
  [
    'magicManagerApp.charts.factory',
    'magicManagerApp.stock.factory'
  ]
)
  .controller('dashboardStockController',dashboardStockController)

function dashboardStockController (stockFactory,chartsFactory) {
  var vm = this;
  
  init();
  
  function init () {
   
    vm.stockDetails = stockFactory.getStockDetails();
    
    chartsFactory.generateChart(stockFactory.getStockInfo(),'stock','fr_fr')
      .then(setChart);
    
    function setChart (chart) {
      vm.chart = chart;
    };
    
  }
}