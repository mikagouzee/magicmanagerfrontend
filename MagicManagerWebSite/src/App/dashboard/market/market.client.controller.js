angular.module(
  'magicManagerApp.dashboard.market.controller', 
  [
    'magicManagerApp.dashboard.factory',
    'magicManagerApp.charts.factory'
  ]
)
  .controller('dashboardMarketController',dashboardMarketController)

function dashboardMarketController (dashboardFactory,chartsFactory) {
  var vm = this;
  
  init();
  
  function init () {
    
    dashboardFactory.getDashboardData('market').then(setDashboard);
    
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