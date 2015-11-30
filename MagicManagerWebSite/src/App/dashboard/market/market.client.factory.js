angular.module(
  'magicManagerApp.market.factory', 
  [
    'magicManagerApp.charts.factory'
  ]
)
  .factory('marketFactory',marketFactory)

function marketFactory (chartsFactory,$q,$http) {
  var factory = {};
  
  factory.getDashboardData = getDashboardData;
  factory.getDetails = getDetails;
  factory.getInfo = getInfo;
  
  return factory;
  
  function getDashboardData () {
    
    var deferred = $q.defer();
    
    var dashboardData = {};
    
    var detailsPromise = getDetails();
    var infoPromise = getInfo();
    
    var promises = [detailsPromise,infoPromise];
    
    $q.all(promises).then(function(values){
      
      dashboardData.details = values[0];
      dashboardData.info = values[1];
      
      deferred.resolve(dashboardData);
      
    });
    
    return deferred.promise;
    
  };
  
  function getDetails () {
    
    var deferred = $q.defer();
    
    var marketDetails =[];
    
    $http.get('/mockApi/dashboard/market/details.json').then(successCallback, errorCallback);
    
    function successCallback (details) {
      
      marketDetails = details.data;
      
      deferred.resolve(marketDetails);
      
    }
    
    function errorCallback (error) {
      
      deferred.reject(false);
      
    }
    
    return deferred.promise;
  
  };
  
  function getInfo () {
    
    var deferred = $q.defer();
    
    var marketInfo = [];
    
    $http.get('/mockApi/dashboard/market/info.json').then(successCallback, errorCallback);
    
    function successCallback (info) {
      
      marketInfo = info.data;
      
      deferred.resolve(marketInfo);
      
    }
    
    function errorCallback (error) {
      
      deferred.reject(false);
      
    }
    
    return deferred.promise;
    
  };
  
}