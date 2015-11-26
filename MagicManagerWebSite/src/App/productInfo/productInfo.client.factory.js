angular.module(
   "magicManagerApp.productInfo.factory",
   [
     
   ]
 )
   .factory(
   "productInfoFactory",
   productInfoFactory
 )

function productInfoFactory($http, $q) {
    var factory = {};
    factory.getProductInfo = getProductInfo;
    factory.getProducts = getProducts;
    return factory;

    function getProductInfo(articleId) {
        var deferred = $q.defer();
        var productInfo = {};

        //todo : insert api call
        $http.get('/mockApi/productInfo/'+articleId+'.json').then(successCallback, errorCallback);
        function successCallback(response) {
            productInfo = [false, response.data];

            productInfo[1].actualPrice = response.data.dailyPrices[0];
            deferred.resolve(productInfo);
        };
        function errorCallback(response) {
            productInfo = ["an error occurred : get", response];
            deferred.reject(productInfo);
        };
        
        return deferred.promise;
    }

    function getProducts() { };
}