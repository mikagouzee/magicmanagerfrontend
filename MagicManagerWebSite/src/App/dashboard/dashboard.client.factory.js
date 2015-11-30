angular.module(
  'magicManagerApp.dashboard.factory', 
  []
)
  .factory('dashboardFactory',dashboardFactory)

function dashboardFactory ($q,$http) {
  var factory = {};
  
  factory.getDashboardData = getDashboardData;
  factory.getDetails = getDetails;
  factory.getInfo = getInfo;
  
  return factory;
  
  function getDashboardData (dashboardName) {
    
    var deferred = $q.defer();
    
    var dashboardData = {};
    
    var detailsPromise = getDetails(dashboardName);
    var infoPromise = getInfo(dashboardName);
    
    var promises = [detailsPromise,infoPromise];
    
    $q.all(promises).then(function(values){
      
      dashboardData.details = values[0];
      dashboardData.info = values[1];
      
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