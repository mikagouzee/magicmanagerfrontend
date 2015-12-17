// the controller for the out of stock dashboard
angular.module(
  'magicManagerApp.dashboard.watchList.controller', 
  [
    // call the factory giving the dashboard data
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardWatchListController',dashboardWatchListController)

function dashboardWatchListController (dashboardFactory) {
  //link the view Model to this
  var vm = this;
  
  //set default ordering
  vm.order = '-absoluteDelta';
  
  //launch the function to init values
  init();
  
  function init () {
    
    //get the dashboard data from the dashboard factory and send it to the setDashboard function
    dashboardFactory.getDashboardData('watchlist','watchlist','fr_fr').then(setDashboard);
    
    function setDashboard(dashboardData){
      
      // assign the response detail property to the marketDetails property of the view Model
      vm.stockDetails = dashboardData.details;
      // assign the response chart property to the chart property of the view Model
      vm.chart = dashboardData.chart;
    };
    
  }
}