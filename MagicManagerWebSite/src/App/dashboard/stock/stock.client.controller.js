angular.module(
  'magicManagerApp.dashboard.stock.controller', 
  [
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardStockController',dashboardStockController)

function dashboardStockController (dashboardFactory) {
  var vm = this;
  
  init();
  
  function init () {
    dashboardFactory.getDashboardData('stock','stock','fr_fr').then(setDashboard);
    function setDashboard(dashboardData){
      vm.stockDetails = dashboardData.details;
      vm.chart = dashboardData.chart;
    }
    
  }
}