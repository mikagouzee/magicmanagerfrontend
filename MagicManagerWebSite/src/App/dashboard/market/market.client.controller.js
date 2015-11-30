angular.module(
  'magicManagerApp.dashboard.market.controller', 
  [
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardMarketController',dashboardMarketController)

function dashboardMarketController (dashboardFactory) {
  var vm = this;
  
  init();
  
  function init () {
    
    dashboardFactory.getDashboardData('market','market','fr_fr').then(setDashboard);
    
    function setDashboard(dashboardData){
      vm.marketDetails = dashboardData.details;
      vm.chart = dashboardData.chart;
    };
    
  }
}