angular.module(
  'magicManagerApp.charts.factory', 
  [
    'magicManagerApp.charts.locale.factory',
   'nvd3' 
  ]
).factory('chartsFactory',chartsFactory)

function chartsFactory (chartsLocaleFactory,$q,$http,$parse) {
  var factory = {};
  
  factory.getChartDefaults = getChartDefaults;
  
  return factory;
  
  function getChartDefaults (chartType, localeCode) {
    var chartData = {};
    
    var deferred = $q.defer();
    
    chartsLocaleFactory.getLocale(localeCode)
      .then(localeSuccess);
    
    function localeSuccess (localeData){
      var locale = d3.locale(localeData);
      
      $http.get('/mockApi/chart/defaults/'+chartType+'.json').then(successCallback);
      
      function successCallback (defaultsResponse) {
        var defaults = defaultsResponse.data;
        defaults.x = $parse(defaults.x);
        defaults.y = $parse(defaults.y);
        defaults.xTickFormater = $parse( defaults.xTickD3Format + '("' + defaults.xTickFormat + '")');
        defaults.yTickFormater = $parse( defaults.yTickD3Format + '("' + defaults.yTickFormat + '")');
        chartData.chartOptions = {
          chart: {
            type: defaults.type,
            height: defaults.height,
            x: function(d) {
              return defaults.x(d);
            },
            y: function(d) {
              return defaults.y(d);
            },
            useInteractiveGuideline: defaults.useInteractiveGuideline,
            xAxis: {
              axisLabel: defaults.xAxisLabel,
              tickFormat:function(x) {
                if (defaults.xTickD3Format === 'timeFormat') {
                  x = new Date(x)
                }
                return defaults.xTickFormater(locale)(x);
              }
            },
            yAxis: {
              axisLabel: defaults.yAxisLabel,
              tickFormat:function(y) {
                if (defaults.yTickD3Format === 'timeFormat') {
                  y = new Date(y)
                }
                return defaults.yTickFormater(locale)(y);
              }
            }
          }
        };
    
          chartData.chartClass = defaults.chartClass;
    
          deferred.resolve(chartData);
      }
      
      
    };
   
    return deferred.promise;
  }
}