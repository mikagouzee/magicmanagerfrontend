 //the factory to generate a array of charts
angular.module(
  'magicManagerApp.charts.page.factory',
  [
    //load the factory to get dashboard data
    'magicManagerApp.dashboard.factory'
  ]
)
  .factory('chartsPageFactory',chartsPageFactory);

function chartsPageFactory (dashboardFactory,$q,$http) {
  //prepare the factory variable
  var factory = {};
  
  //add the function to get the array of charts
  factory.getChartPage = getChartPage;
  
  //return the factory
  return factory;
  
  function getChartPage(chartPageTitle,localeCode){
    //prepare a promise
    var deferred = $q.defer();
    //prepare the returned object
    var charts = [];
    //call the api to get the array of needed charts with parameters and send it to successCallback if no error is encountered
    $http.get('/mockApi/charts/chartpage/'+chartPageTitle+'.json').then(successCallback, errorCallback);
    
    function successCallback(response){
      
      //assign the data from the response to the chartInfo variable
      var chartsInfo = response.data;
      
      //prepare an array of promises
      var promises = [];
      
      //populate the promise array
      for (var chartId in chartsInfo){
        
        //get current chart info
        var chartInfo = chartsInfo[chartId];
        
        //create a promise to get chart data from the dashboard factory
        var promise = dashboardFactory.getChart(chartInfo.dashboardName,chartInfo.dashboardInfoApi,chartInfo.chartName,localeCode,chartInfo.title,chartInfo.stateTitle,chartInfo.parentClass);
        
        //push the promise to the promise array
        promises.push(promise);
        
      }
      
      //use $q to call all the promises in parralel and handle the values in the then function
      $q.all(promises).then(function(values){
        
        //assign the returned values to the charts variable
        charts = values;
        
        //resolve the promise
        deferred.resolve(charts);
        
      })
      
    };
    
    //the callback if the api call fails
    function errorCallback(response){
      
      //reject the promise
      deferred.reject(false);
      
    };
    
    //return the promise
    return deferred.promise;
    
  }
}