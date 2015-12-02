//the factory to get the chart defaults for presentation depending on the type of chart
angular.module(
  'magicManagerApp.charts.defaults.factory', 
  [
    //call the factory to localize the chart texts
    'magicManagerApp.charts.locale.factory',
    //load the nvd3 angular directive
    //An AngularJS directive for NVD3 reusable charting library (based on D3). Easily customize your charts via JSON API.
    //https://github.com/krispo/angular-nvd3
   'nvd3' 
  ]
).factory('chartsDefaultsFactory',chartsDefaultsFactory)

function chartsDefaultsFactory (chartsLocaleFactory,$q,$http,$parse) {
  
   //prepare the factory variable
  var factory = {};
  
  // create the chart defaults getter function
  factory.getChartDefaults = getChartDefaults;
  
  //return the factory
  return factory;
  
  // the chart defaults getter function
  function getChartDefaults (chartType, localeCode) {
    
    //prepare a promise
    var deferred = $q.defer();
    
    //prepare the returned object
    var chartData = {};
    
    //get the localization info from the charts locale factory and send it to the locale success function
    chartsLocaleFactory.getLocale(localeCode)
      .then(localeSuccess);
    
    function localeSuccess (localeData){
      //setup the d3 locale with the returned data
      var locale = d3.locale(localeData);
      
      //call the chart defaults api to get defaults for our chart type and send the result to successCallback
      $http.get('/mockApi/charts/defaults/'+chartType+'.json').then(successCallback);
      
      function successCallback (defaultsResponse) {
        //assign the response data to the defaults var
        var defaults = defaultsResponse.data;
        //prepare a parser for the function determining the value of x
        defaults.x = $parse(defaults.x);
         //prepare a parser for the function determining the value of y
        defaults.y = $parse(defaults.y);
         //prepare a parser for the function determining the value of the ticks of x
        defaults.xTickFormater = $parse( defaults.xTickD3Format + '("' + defaults.xTickFormat + '")');
         //prepare a parser for the function determining the value of the ticks of y
        defaults.yTickFormater = $parse( defaults.yTickD3Format + '("' + defaults.yTickFormat + '")');
        //set the default chart options with the value of defaults and the parsers
        chartData.chartOptions = {
          chart: {
            type: defaults.type,
            height: defaults.height,
            width: defaults.width,
            margin:{
              top:defaults.marginTop,
              bottom:defaults.marginBottom,
              left:defaults.marginLeft,
              right:defaults.marginRight
            },
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
              },
              showMaxMin: defaults.xShowMaxMin,
              axisLabelDistance: defaults.xAxisLabelDistance
            },
            yAxis: {
              axisLabel: defaults.yAxisLabel,
              tickFormat:function(y) {
                if (defaults.yTickD3Format === 'timeFormat') {
                  y = new Date(y)
                }
                return defaults.yTickFormater(locale)(y);
              },
              showMaxMin: defaults.yShowMaxMin,
              axisLabelDistance: defaults.yAxisLabelDistance
            }
          }
        };
          //set the chartClass from the defaults variable
          chartData.chartClass = defaults.chartClass;
    
          //resolve the promise
          deferred.resolve(chartData);
      }
      
      
    };
   
    return deferred.promise;
  }
}