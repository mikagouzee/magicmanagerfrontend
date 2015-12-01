angular.module(
  'magicManagerApp.charts.locale.factory', 
  [
  ]
).factory('chartsLocaleFactory',chartsLocaleFactory)

function chartsLocaleFactory ($q,$http) {
  var factory = {};
  
  factory.getLocale = getLocale;
  
  return factory;
  
  function getLocale (localeCode) {
    var deferred = $q.defer();
    var locale = {};
    
    $http.get('/mockApi/charts/locale/'+localeCode+'.json').then(successCallback, errorCallback);
    
    function successCallback(response){
      locale = response.data;
      deferred.resolve(locale);
    };
    
    function errorCallback(response){
      deferred.reject(false);
    };
    
    return deferred.promise;
    
  }
}