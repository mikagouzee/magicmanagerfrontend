angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    'magicManagerApp.charts.page.factory',
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (dashboardFactory,chartsPageFactory) {
  var vm = this;
  
  init();
  
  function init () {
    
    chartsPageFactory.getChartPage('overview','fr_fr').then(setCharts)
    
    function setCharts (chartsData) {
      vm.charts = chartsData
    }
    
  }
    
}