angular.module(
    'magicManagerApp.cardDetail.controller',
    [
      'magicManagerApp.productInfo.factory',
      'magicManagerApp.cardDetail.chart.factory',
      'magicManagerApp.keyValueTableModels.factory',
      'magicManagerApp.charts.factory',
      'ui.router',
      'keyvaluetables.directive',
      'chartSerialize.factory'
    ]
)
   .controller(
     'cardDetailController',
     cardDetailController
   );

function cardDetailController($stateParams, chartsFactory, productInfoFactory, keyValueTableModelsFactory, chartSerializeFactory, cardDetailChartFactory) {
    var vm = this;

    init();

    function init() {
      var chartDefaults = chartsFactory.getChartDefaults();
        productInfoFactory.getProductInfo($stateParams.articleId)
          .then(
            function(response){
              setProductInfo(response,chartDefaults)
            }
          );
      
    };

    function setProductInfo(response,chartDefaults) {
        if (!response[0]) {
            vm.productInfo = response[1];
            console.log(cardDetailChartFactory.getXField)
            var chartData = chartSerializeFactory.serialize(vm.productInfo.dailyPrices,cardDetailChartFactory.getXField(),cardDetailChartFactory.getYFields());
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
    }
}