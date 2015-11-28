angular.module(
  'magicManagerApp.dashboard.stock.controller', 
  [
    'magicManagerApp.stock.factory',
    'magicManagerApp.stock.chart.factory',
    'magicManagerApp.charts.factory',
    'chartSerialize.factory'
  ]
)
  .controller('dashboardStockController',dashboardStockController)

function dashboardStockController (stockFactory,stockChartFactory,chartsFactory,chartSerializeFactory) {
  var vm = this;
  
  init();
  
  function init () {
    vm.stockDetails = stockFactory.getStockDetails();
    chartsFactory.getChartDefaults('datecurrencylinechart', 'fr_fr').then(chartDefaultsSuccess);
    function chartDefaultsSuccess(chartDefaults){
      var chartData = chartSerializeFactory.serialize(stockFactory.getStockInfo(),stockChartFactory.getXField(), stockChartFactory.getYFields());
      vm.chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
    };
  }
}