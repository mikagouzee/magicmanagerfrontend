//the dashboard overview controller
angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    //load the chart page factory that gets a array of graphs
    'magicManagerApp.charts.page.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (chartsPageFactory) {
  //link the viewModel to this
  var vm = this;
  
  //launch the function to init values
  init();
  
  function init () {
    //call the overview chartpage from api with the french locale and send data to the setCharts function
    chartsPageFactory.getChartPage('overview','fr_fr').then(setCharts)
    
    function setCharts (chartsData) {
      //link the charts data to the charts view model variable
      vm.charts = chartsData
    }
    
  }
    
}