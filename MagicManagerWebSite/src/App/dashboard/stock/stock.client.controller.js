angular.module(
  'magicManagerApp.dashboard.stock.controller', 
  [
    'magicManagerApp.stock.factory',
    'magicManagerApp.charts.factory',
    'magicManagerApp.chart.fields.factory',
    'chartSerialize.factory'
  ]
)
  .controller('dashboardStockController',dashboardStockController)

function dashboardStockController (stockFactory,chartsFactory,chartFieldsFactory,chartSerializeFactory) {
  var vm = this;
  
  init();
  
  function init () {
    vm.stockDetails = stockFactory.getStockDetails();
    chartsFactory.getChartDefaults('datecurrencylinechart', 'fr_fr').then(chartDefaultsSuccess);
    function chartDefaultsSuccess(chartDefaults){
      chartFieldsFactory.getFields('stock').then(fieldSuccess);
      function fieldSuccess(fields){
        var chartData = chartSerializeFactory.serialize(stockFactory.getStockInfo(),fields.x, fields.ys);
        vm.chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
      }
    };
  }
}