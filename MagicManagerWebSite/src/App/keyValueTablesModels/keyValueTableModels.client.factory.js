angular.module('magicManagerApp.keyValueTableModels.factory',[])
  .factory(
    'keyValueTableModelsFactory',
    keyValueTableModelsFactory
  )

function keyValueTableModelsFactory ($http, $q) {
  var factory = {};
  
  factory.getModel= getModel;
  
  return factory;
  
  function getModel(askedModel){
    var deferred = $q.defer();
    var model = {};
    
    //todo : insert api call
    $http.get('/mockApi/keyvaluetablemodels/'+askedModel+'.json').then(successCallback, errorCallback);
    
    function successCallback(response) {
      model = response.data;
      deferred.resolve(model);
    };
    
    function errorCallback(response) {
      model = false;
      deferred.reject(model);
    };
    
    return deferred.promise;
  }
}