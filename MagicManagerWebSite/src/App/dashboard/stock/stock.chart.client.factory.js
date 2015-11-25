angular.module(
  'magicManagerApp.stock.chart.factory', 
  []
).factory('stockChartFactory',stockChartFactory)

function stockChartFactory () {
  var factory = {};
  
  factory.getXField = getXField;
  factory.getYFields = getYFields;
  
  return factory;
  
  function getXField () {
    var xField = {key:'workerEditTime'};
    return xField;
  }
  
  function getYFields () {
    var yFields = [{key:'price',label:'Price'},{key:'sell',label:'Sell'},{key:'low',label:'Low'},{key:'average',label:'Average'}];
    return yFields;
  }
}