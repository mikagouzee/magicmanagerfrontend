angular.module(
    'magicManagerApp.cardDetail.controller',
    [
      'magicManagerApp.cardDetail.factory',
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

function cardDetailController($stateParams, cardDetailFactory, keyValueTableModelsFactory, chartsFactory) {
    var vm = this;

    init();

    function init() {
      
      cardDetailFactory.getDetails($stateParams.articleId)
        .then(setCardDetail);

      function setCardDetail(cardDetails) {
        
          vm.productInfo = cardDetails;
        
          setTechSheetTables();
        
          chartsFactory.generateChart(vm.productInfo.dailyPrices,'carddetail','fr_fr')
            .then(setChart);

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