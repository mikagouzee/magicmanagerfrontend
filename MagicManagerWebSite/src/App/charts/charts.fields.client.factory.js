//the factory returning the fields used in the chart
angular.module(
  'magicManagerApp.charts.fields.factory',
  [
    
  ]
)
  .factory('chartsFieldsFactory',chartsFieldsFactory);

function chartsFieldsFactory ($q, $http) {
  
  //prepare the factory variable
  var factory = {};
  
  // create the function to get the fields
  factory.getFields = getFields;
  
  //return the factory
  return factory;
  
  // cthe function to get the fields
  function getFields (chart) {
    
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the retruned object
    var fields = {};
    
    //call the api to get the fields and send them to successCallback
    $http.get('/mockApi/charts/fields/'+chart+'.json').then(successCallback, errorCallback);
    
    function successCallback(response){
      //assign the reponse data to the returned object
      fields = response.data;
      //resolve the promise
      deferred.resolve(fields);
    };
    
    function errorCallback(response){
      //if an error occured reject the promise
      deferred.reject(false);
    };
    
    //return the promise
    return deferred.promise;
  }

}