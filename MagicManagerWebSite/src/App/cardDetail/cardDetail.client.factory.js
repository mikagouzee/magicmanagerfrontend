angular.module(
   'magicManagerApp.cardDetail.factory',
   [
     
   ]
 )
   .factory(
    'cardDetailFactory',
    cardDetailFactory
   )

function cardDetailFactory($http, $q) {
    var factory = {};
  
    factory.getDetails = getDetails;
  
    return factory;

    function getDetails(articleId) {
      var deferred = $q.defer();
      var cardDetail = {};
      
      $http.get('/mockApi/cardDetail/'+articleId+'.json').then(successCallback, errorCallback);
      
      function successCallback(response) {
        
        cardDetail = response.data;
        
        cardDetail.actualPrice = response.data.dailyPrices[0];
        
        deferred.resolve(cardDetail);
      
      };
      
      function errorCallback(response) {
        
        deferred.reject(false);
      
      };
      
      return deferred.promise;
      
    }

}