angular.module(
  'magicManagerApp.stock.factory', 
  []
).factory('stockFactory',stockFactory)

function stockFactory () {
  var factory = {};
  
  factory.getStockInfo = getStockInfo;
  factory.getStockDetails = getStockDetails;
  
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
  
  function getStockDetails () {
      var stockDetails = [
        {
          id:1,
          name:'test card 1',
          price: getRandomArbitrary(100, 200),
          average: getRandomArbitrary(100, 200),
          sell: getRandomArbitrary(100, 200),
          low: getRandomArbitrary(100, 200),
          siteWideCount:getRandomArbitrary(1000, 4000)
        },
        {
          id:2,
          name:'test card 2',
          price: getRandomArbitrary(200, 300),
          average: getRandomArbitrary(100, 200),
          sell: getRandomArbitrary(100, 200),
          low: getRandomArbitrary(100, 200),
          siteWideCount:getRandomArbitrary(1000, 4000)
        }
      ];
    for (var i in stockDetails){
      stockDetails[i].delta = stockDetails[i].price/stockDetails[i].sell;
    }
      return stockDetails;
    };
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}