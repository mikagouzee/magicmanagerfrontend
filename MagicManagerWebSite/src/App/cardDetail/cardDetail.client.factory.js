//the factory to get card details
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
   //prepare the factory variable
    var factory = {};
    
    //add the function to get the card details
    factory.getDetails = getDetails;
  
    //return the factory
    return factory;

    // the function to get the card details
    function getDetails(articleId) {
      //prepare the promise
      var deferred = $q.defer();
      //prepare the returned object
      var cardDetail = {};
      
      //call the api to get the card details data and send it to successCallback if no error is encountered
      $http.get('http://localhost:59643/api/productDto/'+articleId).then(successCallback, errorCallback);
      
      function successCallback(response) {
		  console.log(response.data);
        //assign the response data to the response object
        cardDetail = response.data;
        //set actual price from the response object
	  if (response.data.lastDp[0]){
			cardDetail.actualPrice = response.data.lastDp[0];
	  }
		//resolve promise
        deferred.resolve(cardDetail);
      
      };
      
      function errorCallback(response) {
        //reject the promise
        deferred.reject(false);
      
      };
      //return the promise
      return deferred.promise;
      
    }

}