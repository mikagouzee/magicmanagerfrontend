angular.module(
  'magicManagerApp.cardDetail.chart.factory', 
  []
).factory('cardDetailChartFactory',cardDetailChartFactory)

function cardDetailChartFactory () {
  var factory = {};
  
  factory.getXField = getXField;
  factory.getYFields = getYFields;
  
  return factory;
  
  function getXField () {
    var xField = {key:'workerEditTime'};
    return xField;
  }
  
  function getYFields () {
    var yFields = [{key:'price',label:'Prix Stock'},{key:'sell',label:'Sell'},{key:'low',label:'Low'},{key:'average',label:'Average'}];
    return yFields;
  }
}