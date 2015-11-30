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
    
    marketFactory.getDashboardData().then(setDashboard);
    
    function setDashboard(dashboardData){
      vm.marketDetails = dashboardData.details;
      chartsFactory.generateChart(dashboardData.info,'market','fr_fr')
        .then(setChart);
    };    
    
    function setChart (chart) {
      vm.chart = chart;
    };
    
  }
}