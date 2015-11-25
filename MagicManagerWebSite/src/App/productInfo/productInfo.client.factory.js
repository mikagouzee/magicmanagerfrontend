angular.module(
    "magicManagerApp.productInfo.factory",
    []
    ).factory(
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
        $http.get("/someUrl").then(successCallback, errorCallback);
        function successCallback(response) {
            productInfo = [false, response];

            productInfo.actualPrice = productInfo.dailyPrice[0];
            defered.resolve(productInfo);
        };
        function errorCallback(response) {
            productInfo = ["an error occurred : get", response];
            defered.reject(productInfo);
        };
        
        return defered.promise;
    }

    function getProducts() { };
}