angular.module(
  'magicManagerApp.dashboard.market.controller', 
  [
    'magicManagerApp.market.factory',
    'magicManagerApp.chart.fields.factory',
    'magicManagerApp.charts.factory',
    'chartSerialize.factory'
  ]
)
  .controller('dashboardMarketController',dashboardMarketController)

function dashboardMarketController (marketFactory,chartFieldsFactory,chartsFactory,chartSerializeFactory) {
  var vm = this;
  
  init();
  
  function init () {
    vm.marketDetails = marketFactory.getMarketDetails();
    chartsFactory.getChartDefaults('datecurrencylinechart', 'fr_fr').then(chartDefaultsSuccess);
    function chartDefaultsSuccess(chartDefaults){
      chartFieldsFactory.getFields('market').then(fieldSuccess);
      function fieldSuccess(fields){
        var chartData = chartSerializeFactory.serialize(marketFactory.getMarketInfo(),fields.x, fields.ys);
        vm.chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
      }
    }
  }
}