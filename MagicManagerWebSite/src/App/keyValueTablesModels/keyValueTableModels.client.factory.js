//the factory module to get the fields needed for generating key value tables
angular.module('magicManagerApp.keyValueTableModels.factory',[])
  .factory(
    'keyValueTableModelsFactory',
    keyValueTableModelsFactory
  )

function keyValueTableModelsFactory ($http, $q) {
  //prepare the factory variable
  var factory = {};
  
  //add the function to get key value tables models
  factory.getModel= getModel;
  
  //return the factory
  return factory;
  
  // the function to get key value tables models
  function getModel(askedModel){
    //prepare the promise
    var deferred = $q.defer();
    //prepare the returned object
    var model = {};

    //make the api call to get the models and send the result to the successCallback
    $http.get('/mockApi/keyvaluetablemodels/'+askedModel+'.json').then(successCallback, errorCallback);
    
    function successCallback(response) {
      //assign the api response data to the returned object
      model = response.data;
      //resolve the promise
      deferred.resolve(model);
    };
    
    //if an error occured reject the promise
    function errorCallback(response) {
      model = false;
      deferred.reject(model);
    };
    
    //return the promise    
    return deferred.promise;
  }
}