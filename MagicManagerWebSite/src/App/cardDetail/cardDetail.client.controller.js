// the card detail controller
angular.module(
    'magicManagerApp.cardDetail.controller',
    [
      //load the factory to get the card details
      'magicManagerApp.cardDetail.factory',
      //load the factory to get the values to show in the details table
      'magicManagerApp.keyValueTableModels.factory',
      //load the factory to get the formatted chart
      'magicManagerApp.charts.factory',
      //load ui-router
      //The de-facto solution to flexible routing with nested views in AngularJS
      //https://github.com/angular-ui/ui-router/
      'ui.router',
      //load key value tables directive
      //a directive generating a serie of tables of key and values with labels from an object by parsing the asked field
      // https://github.com/belgac/key-value-tables-directive
      'keyvaluetables.directive'
    ]
)
   .controller(
     'cardDetailController',
     cardDetailController
   );

function cardDetailController($stateParams, cardDetailFactory, keyValueTableModelsFactory, chartsFactory) {
    //link the view Model to this
    var vm = this;
    
    //launch the function to init values
    init();

    function init() {
      // get the card details for the actual articleId and send the data to the setCardDetail function
      cardDetailFactory.getDetails($stateParams.articleId)
        .then(setCardDetail);

      function setCardDetail(cardDetails) {
          // link the productInfo property of the view model to the received data from the factory
          vm.productInfo = cardDetails;
          
          //call the function to create the keyValueTables needed for the product flags and details.
          setTechSheetTables();
        
          //generate the historical price chart of the product and send the data to the setChart function
          chartsFactory.generateChart(vm.productInfo.dailyPrices,'carddetail','fr_fr')
            .then(setChart);

      };
      
      //the function to create the keyValueTables needed for the product flags and details.
      function setTechSheetTables () {
        //create the view model property containing the techSheetTables
        vm.techSheetTables = [];
        //get the flags key value model
        keyValueTableModelsFactory.getModel('flags').then(function(flags){
          if (flags){
            //set the flags key value table in the first position
            flags.order = 1;
            //add the flags data to the techSheet tables view model
            vm.techSheetTables.push(flags)
          };
        })
        keyValueTableModelsFactory.getModel('details').then(function(details){
          if (details){
            //set the details key value table in the first position
            details.order = 2;
             //add the details data to the techSheet tables view model
            vm.techSheetTables.push(details)
          };
        })
      };
      
      function setChart (chart) {
        //assign the chart data to the chart property of the view model
        vm.chart = chart;
      }
    }
}