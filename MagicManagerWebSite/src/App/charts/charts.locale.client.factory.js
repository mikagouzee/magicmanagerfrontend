//the factory to get the locale formatting for charts
angular.module(
  'magicManagerApp.charts.locale.factory', 
  [
  ]
).factory('chartsLocaleFactory',chartsLocaleFactory)

function chartsLocaleFactory ($q,$http) {
  
  //prepare the factory variable
  var factory = {};
  
  // create the function to get the localization data
  factory.getLocale = getLocale;
  
  //return the factory
  return factory;
  
  // the function to get the localization data
  function getLocale (localeCode) {
    
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the retruned object
    var locale = {};
    
    //call the api to get the localization data and send it to successCallback
    $http.get('/mockApi/charts/locale/'+localeCode+'.json').then(successCallback, errorCallback);
    
    function successCallback(response){
      //assign the Api response data to the returned object
      locale = response.data;
      //resolve the promise
      deferred.resolve(locale);
    };
    
    function errorCallback(response){
      //if an error occured reject the promise
      deferred.reject(false);
    };
    
    //return the promise
    return deferred.promise;
    
  }
}