angular.module(
  'magicManagerApp.charts.factory', 
  [
    'magicManagerApp.charts.defaults.factory',
    'magicManagerApp.charts.fields.factory',
    'chartSerialize.factory',
   'nvd3' 
  ]
).factory('chartsFactory',chartsFactory)

function chartsFactory (chartsDefaultsFactory,chartsLocaleFactory,chartsFieldsFactory,chartSerializeFactory,$q,$http) {
  var factory = {};
  
  factory.generateChart = generateChart;
  
  return factory;
  
  function generateChart (data, chartInfo, localeCode) {
    var deferred = $q.defer();

    var chart = {};
    
    $http.get('/mockApi/charts/chart/'+chartInfo+'.json').then(successCallback, errorCallback);
    
    function successCallback (info){
      
      info = info.data;
      
      var fieldsFactory =  chartsFieldsFactory.getFields(info.fields);
      var defaultsFactory = chartsDefaultsFactory.getChartDefaults(info.type, localeCode);
    
      var promises = [fieldsFactory,defaultsFactory];
    
      $q.all(promises).then(function(values){
        var fields = values[0];
        
        var chartData = chartSerializeFactory.serialize(data,fields.x, fields.ys);

        var chartDefaults = values[1];
      
        chart = {data: chartData,options: chartDefaults.chartOptions, class:chartDefaults.chartClass};
      
        deferred.resolve(chart);
      
      });
    };
    
    function errorCallback(error){
      deferred.reject(false);
    }
    
    
    return deferred.promise;
  }
}