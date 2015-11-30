angular.module(
  'magicManagerApp.dashboard.market.controller', 
  [
    'magicManagerApp.charts.factory',
    'magicManagerApp.market.factory'
  ]
)
  .controller('dashboardMarketController',dashboardMarketController)

function dashboardMarketController (marketFactory,chartsFactory) {
  var vm = this;
  
  init();
  
  function init () {
    vm.marketDetails = marketFactory.getMarketDetails();
    
    chartsFactory.generateChart(marketFactory.getMarketInfo(),'market','fr_fr')
      .then(setChart);
    
    function setChart (chart) {
      vm.chart = chart;
    };
    
  }
}