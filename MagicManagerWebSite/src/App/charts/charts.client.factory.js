//the factory to generate charts
angular.module(
  'magicManagerApp.charts.factory', 
  [
    //load the factory to get chart defaults by type
    'magicManagerApp.charts.defaults.factory',
    //load the factory returning the fields used in the chart
    'magicManagerApp.charts.fields.factory',
    //load the factory serializing the fields used in the chart
    // A factory to serialize data for nvd3 chart
    // https://github.com/belgac/chart-serialize-factory
    'chartSerialize.factory',
    //load the nvd3 angular directive
    //An AngularJS directive for NVD3 reusable charting library (based on D3). Easily customize your charts via JSON API.
    //https://github.com/krispo/angular-nvd3
   'nvd3' 
  ]
).factory('chartsFactory',chartsFactory)

function chartsFactory (chartsDefaultsFactory,chartsLocaleFactory,chartsFieldsFactory,chartSerializeFactory,$q,$http) {
  
  //prepare the factory variable
  var factory = {};
  
  // create the chart generation function
  factory.generateChart = generateChart;
  
  //return the factory
  return factory;
  
   // the chart generation function
  function generateChart (data, chartInfo, localeCode) {
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the returned object
    var chart = {};
    
    //call the Api with the info for the chart fields and the defaults
    $http.get('/mockApi/charts/chart/'+chartInfo+'.json').then(successCallback, errorCallback);
    
    function successCallback (info){
      //assign the response data to the chart info object
      info = info.data;
      
      //prepare a promise to get the fields used in this chart based on the chart info
      var fieldsFactory =  chartsFieldsFactory.getFields(info.fields);
      //prepare a promise to get the defaults fort this chart based on the chart info
      var defaultsFactory = chartsDefaultsFactory.getChartDefaults(info.type, localeCode);
      
      //create an array of promises
      var promises = [fieldsFactory,defaultsFactory];
    
      //use $q to call all the promises in parralel and handle the values in the then function
      $q.all(promises).then(function(values){
        //assign the result of the field promise to the field variable
        var fields = values[0];
        //serialize the data based on the field variable
        var chartData = chartSerializeFactory.serialize(data,fields.x, fields.ys);
        //assign the result of the chart default promise to the chartDefaults variable
        var chartDefaults = values[1];
      
        // prepare the chart returned object with the generated data
        chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
      
        //resolve the promise
        deferred.resolve(chart);
      
      });
    };
    
    //return false if error in API call
    function errorCallback(error){
      //reject the promise with false
      deferred.reject(false);
    }
    
    //return the promise
    return deferred.promise;
  }
}