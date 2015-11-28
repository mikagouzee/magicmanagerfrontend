angular.module(
  'magicManagerApp.dashboard.overview.controller', 
  [
    'magicManagerApp.market.factory',
    'magicManagerApp.stock.factory',
    'magicManagerApp.charts.factory',
    'magicManagerApp.chart.fields.factory',
    'chartSerialize.factory'
  ]
)
  .controller('dashboardOverviewController',dashboardOverviewController);

function dashboardOverviewController (stockFactory,marketFactory,chartsFactory,chartFieldsFactory,chartSerializeFactory) {
  var vm = this;
  
  init();
  
  function init () {
    chartsFactory.getChartDefaults('datecurrencylinechart', 'fr_fr').then(chartDefaultsSuccess);
    function chartDefaultsSuccess(chartDefaults){
      chartFieldsFactory.getFields('stock').then(stockFieldSuccess);
      function stockFieldSuccess(stockFields){
        var stockChartData = chartSerializeFactory.serialize(stockFactory.getStockInfo(),stockFields.x, stockFields.ys);
        vm.stockChart = {data: stockChartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
      }
      
      chartFieldsFactory.getFields('market').then(marketFieldSuccess);
      function marketFieldSuccess(marketFields) {
        var marketChartData = chartSerializeFactory.serialize(marketFactory.getMarketInfo(),marketFields.x, marketFields.ys);
        vm.marketChart = {data: marketChartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
      }
    }
  }
}