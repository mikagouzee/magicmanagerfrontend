angular.module(
  'magicManagerApp.dashboard.market.controller', 
  [
    'magicManagerApp.market.factory',
    'magicManagerApp.market.chart.factory',
    'magicManagerApp.charts.factory',
    'chartSerialize.factory'
  ]
)
  .controller('dashboardMarketController',dashboardMarketController)

function dashboardMarketController (marketFactory,marketChartFactory,chartsFactory,chartSerializeFactory) {
  var vm = this;
  
  init();
  
  function init () {
    var chartDefaults = chartsFactory.getChartDefaults();
    var chartData = chartSerializeFactory.serialize(marketFactory.getMarketInfo(),marketChartFactory.getXField(), marketChartFactory.getYFields());
    vm.chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
  }
}