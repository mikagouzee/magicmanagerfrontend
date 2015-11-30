angular.module(
  'magicManagerApp.chart.fields.factory',
  [
    
  ]
)
  .factory('chartFieldsFactory',chartFieldsFactory);

function chartFieldsFactory ($q, $http) {
  var factory = {};
  
  factory.getFields = getFields;
  
  return factory;
  
  function getFields (chart) {
    var deferred = $q.defer();
    var fields = {};
    
    $http.get('/mockApi/charts/fields/'+chart+'.json').then(successCallback, errorCallback);
    
    function successCallback(response){
      fields = response.data;
      deferred.resolve(fields);
    };
    
    function errorCallback(response){
      deferred.reject(false);
    };
    
    return deferred.promise;
  }

}