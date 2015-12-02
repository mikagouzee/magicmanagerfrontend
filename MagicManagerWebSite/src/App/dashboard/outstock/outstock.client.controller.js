// the controller for the out of stock dashboard
angular.module(
  'magicManagerApp.dashboard.outstock.controller', 
  [
    // call the factory giving the dashboard data
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardOutStockController',dashboardOutStockController)

function dashboardOutStockController (dashboardFactory) {
  //link the view Model to this
  var vm = this;
  
  //launch the function to init values
  init();
  
  function init () {
    
    //get the dashboard data from the dashboard factory and send it to the setDashboard function
    dashboardFactory.getDashboardData('outstock','outstock','fr_fr').then(setDashboard);
    
    function setDashboard(dashboardData){
      
      // assign the response detail property to the marketDetails property of the view Model
      vm.stockDetails = dashboardData.details;
      // assign the response chart property to the chart property of the view Model
      vm.chart = dashboardData.chart;
    };
    
  }
}