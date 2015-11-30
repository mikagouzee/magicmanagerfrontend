angular.module(
  'magicManagerApp.dashboard.factory', 
  [
    'magicManagerApp.charts.factory'
  ]
)
  .factory('dashboardFactory',dashboardFactory)

function dashboardFactory (chartsFactory,$q,$http) {
  var factory = {};
  
  factory.getDashboardData = getDashboardData;
  factory.getDetails = getDetails;
  factory.getChart= getChart;
  factory.getInfo = getInfo;
  
  return factory;
  
  function getDashboardData (dashboardName,chartName,localeCode) {
    
    var deferred = $q.defer();
    
    var dashboardData = {};
    
    var detailsPromise = getDetails(dashboardName);
    var chartPromise = getChart(dashboardName,chartName,localeCode);
    
    var promises = [detailsPromise,chartPromise];
    
    $q.all(promises).then(function(values){
      
      dashboardData.details = values[0];
      dashboardData.chart = values[1];
      
      deferred.resolve(dashboardData);
      
    });
    
    return deferred.promise;
    
  };
  
  function getDetails (dashboardName) {
    
    var deferred = $q.defer();
    
    var dashboardDetails =[];
    
    $http.get('/mockApi/dashboard/'+dashboardName+'/details.json').then(successCallback, errorCallback);
    
    function successCallback (details) {
      
      dashboardDetails = details.data;
      
      deferred.resolve(dashboardDetails);
      
    }
    
    function errorCallback (error) {
      
      deferred.reject(false);
      
    }
    
    return deferred.promise;
  
  };
  
  function getChart(dashboardName,chartName,localeCode) {
    var deferred = $q.defer();
    
    var chart = {};
    
    getInfo(dashboardName).then(generateChart);
    
    function generateChart(info){
      
      chartsFactory.generateChart(info,chartName,localeCode)
        .then(setChart);
      
    };
    
    function setChart(chartData){
      
      chart = chartData;
      
      deferred.resolve(chart);
      
    };
    
    return deferred.promise;
  };
  
  function getInfo (dashboardName) {
    
    var deferred = $q.defer();
    
    var dashboardInfo = [];
    
    $http.get('/mockApi/dashboard/'+dashboardName+'/info.json').then(successCallback, errorCallback);
    
    function successCallback (info) {
      
      dashboardInfo = info.data;
      
      deferred.resolve(dashboardInfo);
      
    }
    
    function errorCallback (error) {
      
      deferred.reject(false);
      
    }
    
    return deferred.promise;
    
  };
  
}