angular.module(
  'magicManagerApp.dashboard.stock.controller', 
  [
    'magicManagerApp.charts.factory',
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardStockController',dashboardStockController)

function dashboardStockController (dashboardFactory,chartsFactory) {
  var vm = this;
  
  init();
  
  function init () {
    dashboardFactory.getDashboardData('stock').then(setDashboard);
    function setDashboard(dashboardData){
      vm.stockDetails = dashboardData.details;
      chartsFactory.generateChart(dashboardData.info,'stock','fr_fr')
        .then(setChart);
    }
    
    function setChart (chart) {
      vm.chart = chart;
    };
    
  }
}