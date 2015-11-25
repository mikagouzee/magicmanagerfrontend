angular.module(
  'magicManagerApp.market.factory', 
  []
).factory('marketFactory',marketFactory)

function marketFactory () {
  var factory = {};
  
  factory.getMarketInfo = getMarketInfo;
  
  return factory;
  
  function getMarketInfo () {
    var marketInfo = [
      {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 1000000000
      }, {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 2000000000
      }, {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 3000000000
      }, {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 4000000000
      }, {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 5000000000
      }, {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 6000000000
      }, {
        sell: getRandomArbitrary(100000, 200000),
        low: getRandomArbitrary(100000, 200000),
        average: getRandomArbitrary(100000, 200000),
        workerEditTime: 7000000000
      }
    ];
    
    return marketInfo;
  }
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}