//the dashboard data factory
angular.module(
  'magicManagerApp.dashboard.factory', 
  [
    //load the chart data factory
    'magicManagerApp.charts.factory'
  ]
)
  .factory('dashboardFactory',dashboardFactory)

function dashboardFactory (chartsFactory,$q,$http) {
  //prepare the factory variable
  var factory = {};
  
  //add the function to get the dashboard data
  factory.getDashboardData = getDashboardData;
  //add the function to get the dashboard details
  factory.getDetails = getDetails;
  //add the function to get the chart formated data
  factory.getChart= getChart;
  //add the function to get the dashboard global info (totals)
  factory.getInfo = getInfo;
  
  //return the factory
  return factory;
  
  //the function to get the dashboard data
  function getDashboardData (dashboardName,chartName,localeCode) {
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the returned object
    var dashboardData = {};
    var definition = {};
    $http.get('/mockApi/dashboard/'+dashboardName+'/definition.json').then(successCallback, errorCallback);

    function successCallback (definition) {
      definition = definition.data;
    console.log(definition.dashboardDetailsApi)
      // call the detail promise from this factory;
      var detailsPromise = getDetails(definition.dashboardDetailsApi);
      // call the chart promise from this factory;
      var chartPromise = getChart(dashboardName,definition.dashboardInfoApi,chartName,localeCode);
      //create an array of promises
      var promises = [detailsPromise,chartPromise];
    
       //use $q to call all the promises in parralel and handle the values in the then function
      $q.all(promises).then(function(values){
        dashboardData.definition = definition;
        //assign the result of the detailspromise to the dashboardData details property
        dashboardData.details = values[0];
        //assign the result of the chartpromise to the dashboardData chart property
        dashboardData.chart = values[1];
      
        //resolve the promise
        deferred.resolve(dashboardData);
      
      });
    };

    function errorCallback (err){
      console.log(err);
      deferred.reject(false)
    }
    //return the promise
    return deferred.promise;
    

  };
  
  // the function to get the dashboard details
  function getDetails (dashboardDetailsApi) {
    
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the returned array
    var dashboardDetails =[];
    //call the api to get the array of dashboard details (cards) and send it to successCallback if no error is encountered
    $http.get(dashboardDetailsApi).then(successCallback, errorCallback);
    
    function successCallback (details) {
      //assign the data from the details api call to dashboardDetails
      dashboardDetails = details.data;
      //resolve the promise
      deferred.resolve(dashboardDetails);
      
    }
    //the error callback from the api
    function errorCallback (error) {
      //reject the promise
      deferred.reject(false);
      
    }
    //return the promise
    return deferred.promise;
  
  };
  
  // the function to get the chart formated data
  function getChart(dashboardName,dashboardInfoApi,chartName,localeCode,title,stateLink) {
    
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the returned object
    var chart = {};
    
    // call the getInfo function from this factory and send the result to the generateChart function
    getInfo(dashboardInfoApi).then(generateChart);
    
    
    function generateChart(info){
      //send the received info to the chart generation function from the chart factory and send the result to the setChart function
      chartsFactory.generateChart(info,chartName,localeCode)
        .then(setChart);
      
    };
    
    //set the chart data
    function setChart(chartData){
      //assign the received chart data
      chart = chartData;
      //add the dashboardName
      chart.dashboardName = dashboardName;
      //add the title
      chart.title = title;
      //resolve the promise
      deferred.resolve(chart);
      
    };
    
    //return the promise
    return deferred.promise;
  };
  
  // the function to get the dashboard global info (totals)
  function getInfo (dashboardInfoApi) {
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the retruned array
    var dashboardInfo = [];
    
    //call the dashboard info api and send the result to succes if no error was encountered
    $http.get(dashboardInfoApi).then(successCallback, errorCallback);
    
    function successCallback (info) {
      //assign the data from the response to the returned array
      dashboardInfo = info.data;
      //resolve the promise
      deferred.resolve(dashboardInfo);
      
    }
    
    function errorCallback (error) {
      //reject the promise if there was an error
      deferred.reject(false);
      
    }
    
    //return the promise
    return deferred.promise;
    
  };
  
}