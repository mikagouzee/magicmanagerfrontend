angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    'magicManagerApp.market.factory',
    'magicManagerApp.market.chart.factory',
    'magicManagerApp.stock.factory',
    'magicManagerApp.stock.chart.factory',
    'magicManagerApp.charts.factory',
    'chartSerialize.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (stockFactory,stockChartFactory,marketFactory,marketChartFactory,chartsFactory,chartSerializeFactory) {
  var vm = this;
  
  init();
  
  function init () {
    var chartDefaults = chartsFactory.getChartDefaults();
    var stockChartData = chartSerializeFactory.serialize(stockFactory.getStockInfo(),stockChartFactory.getXField(), stockChartFactory.getYFields());
    vm.stockChart = {data: stockChartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
    var marketChartData = chartSerializeFactory.serialize(marketFactory.getMarketInfo(),marketChartFactory.getXField(), marketChartFactory.getYFields());
    vm.marketChart = {data: marketChartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
  }
}