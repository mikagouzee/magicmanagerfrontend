angular.module(
  'magicManagerApp.market.chart.factory', 
  []
).factory('marketChartFactory',marketChartFactory)

function marketChartFactory () {
  var factory = {};
  
  factory.getXField = getXField;
  factory.getYFields = getYFields;
  
  return factory;
  
  function getXField () {
    var xField = {key:'workerEditTime'};
    return xField;
  }
  
  function getYFields () {
    var yFields = [{key:'sell',label:'Sell'},{key:'low',label:'Low'},{key:'average',label:'Average'}];
    return yFields;
  }
}