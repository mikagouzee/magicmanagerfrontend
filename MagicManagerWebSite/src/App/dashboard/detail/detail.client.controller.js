// the controller for the market dashboard
angular.module(
  'magicManagerApp.dashboard.detail.controller', 
  [
    // call the factory giving the dashboard data
    'magicManagerApp.dashboard.factory'
  ]
)
  .controller('dashboardDetailController',dashboardDetailController)

function dashboardDetailController (dashboardFactory,$stateParams,$parse) {
  //link the view Model to this
  var vm = this;
  
  vm.parseTable = parseTable

  //launch the function to init values
  init();
  
  function init () {
    
    //get the dashboard data from the dashboard factory and send it to the setDashboard function
    dashboardFactory.getDashboardData($stateParams.dashboard,$stateParams.dashboard,'fr_fr').then(setDashboard);
    
    function setDashboard(dashboardData){
      //assign the response definition property to the definition property of the view Model
      vm.definition = dashboardData.definition;
      // assign the response detail property to the marketDetails property of the view Model
      vm.marketDetails = dashboardData.details;
      // assign the response chart property to the chart property of the view Model
      vm.chart = dashboardData.chart;
    };
    
  }

  function parseTable (key,source) {
    var parser = $parse(key);
    var value = parser(source);
    return value;
  }
}