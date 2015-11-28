angular.module(
    'magicManagerApp.cardDetail.controller',
    [
      'magicManagerApp.productInfo.factory',
      'magicManagerApp.keyValueTableModels.factory',
      'magicManagerApp.charts.factory',
      'magicManagerApp.chart.fields.factory',
      'ui.router',
      'keyvaluetables.directive',
      'chartSerialize.factory'
    ]
)
   .controller(
     'cardDetailController',
     cardDetailController
   );

function cardDetailController($stateParams, chartsFactory, chartFieldsFactory, productInfoFactory, keyValueTableModelsFactory, chartSerializeFactory) {
    var vm = this;

    init();

    function init() {
      
      chartsFactory.getChartDefaults('datecurrencylinechart', 'fr_fr').then(chartDefaultsSuccess);
      function chartDefaultsSuccess(chartDefaults){
        productInfoFactory.getProductInfo($stateParams.articleId)
          .then(
            function(response){
              setProductInfo(response,chartDefaults)
            }
          );
      }
      
    };

    function setProductInfo(response,chartDefaults) {
        if (!response[0]) {
            vm.productInfo = response[1];
            chartFieldsFactory.getFields('carddetail').then(fieldSuccess);
            function fieldSuccess (fields) {
              console.log(fields)
              var chartData = chartSerializeFactory.serialize(vm.productInfo.dailyPrices,fields.x,fields.ys);
              vm.chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
              vm.techSheetTables = [];
              keyValueTableModelsFactory.getModel('flags').then(function(flags){
                if (flags){
                  flags.order = 1;
                  vm.techSheetTables.push(flags)
                };
              })
              keyValueTableModelsFactory.getModel('details').then(function(details){
                if (details){
                  details.order = 2;
                  vm.techSheetTables.push(details)
                };
              })
          };
        };
    }
}