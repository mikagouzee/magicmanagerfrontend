angular.module(
    'magicManagerApp.cardDetail.controller',
    [
      'magicManagerApp.productInfo.factory',
      'magicManagerApp.keyValueTableModels.factory',
      'magicManagerApp.charts.factory',
      'ui.router',
      'keyvaluetables.directive'
    ]
)
   .controller(
     'cardDetailController',
     cardDetailController
   );

function cardDetailController($stateParams, productInfoFactory, keyValueTableModelsFactory, chartsFactory) {
    var vm = this;

    init();

    function init() {
      
      productInfoFactory.getProductInfo($stateParams.articleId)
        .then(setProductInfo);

      function setProductInfo(response) {
        if (!response[0]) {
          vm.productInfo = response[1];
          setTechSheetTables();
          chartsFactory.generateChart(vm.productInfo.dailyPrices,'carddetail','fr_fr')
            .then(setChart);

        }
      };
      
      function setTechSheetTables () {
        vm.techSheetTables = []
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
      
      function setChart (chart) {
        vm.chart = chart;
      }
    }
}