angular.module(
  'magicManagerApp.stock.factory', 
  []
).factory('stockFactory',stockFactory)

function stockFactory () {
  var factory = {};
  
  factory.getStockInfo = getStockInfo;
  
  return factory;
  
  function getStockInfo () {
    var stockInfo = [
      {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 1000000000
      }, {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 2000000000
      }, {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 3000000000
      }, {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 4000000000
      }, {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 5000000000
      }, {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 6000000000
      }, {
        price: getRandomArbitrary(100000, 200000),
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 7000000000
      }
    ];
    
    return stockInfo;
  }
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}