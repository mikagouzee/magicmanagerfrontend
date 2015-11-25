angular.module(
  'magicManagerApp.market.factory', 
  []
).factory('marketFactory',marketFactory)

function marketFactory () {
  var factory = {};
  
  factory.getMarketInfo = getMarketInfo;
  factory.getMarketDetails = getMarketDetails;
  
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
  };
  
  function getMarketDetails () {
      var marketDetails = [
        {
          id:1,
          name:'test card 1',
          average: getRandomArbitrary(100, 200),
          sell: getRandomArbitrary(100, 200),
          low: getRandomArbitrary(100, 200),
          siteWideCount:getRandomArbitrary(1000, 4000)
        },
        {
          id:2,
          name:'test card 2',
          average: getRandomArbitrary(100, 200),
          sell: getRandomArbitrary(100, 200),
          low: getRandomArbitrary(100, 200),
          siteWideCount:getRandomArbitrary(1000, 4000)
        }
      ];
      return marketDetails;
    };
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}