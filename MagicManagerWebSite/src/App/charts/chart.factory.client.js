angular.module(
  'magicManagerApp.charts.factory', 
  [
   'nvd3' 
  ]
).factory('chartsFactory',chartsFactory)

function chartsFactory () {
  var factory = {};
  
  factory.getDefaultChart = getDefaultChart;
  
  return factory;
  
  function getDefaultChart () {
    var chartData = {};
    chartData.chartOptions = {
      chart: {
        type: 'lineChart',
        height: 250,
        x: function(d) {
          return d.x;
        },
        y: function(d) {
          return d.y;
        },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Date',
          tickFormat:function(d) {
            return d3.time.format('%d/%m/%Y')(new Date(d));
          }
        },
        yAxis: {
          axisLabel: 'Prix (€)',
          tickFormat:function(d) {
            return d3.format("$,.2f")(d)
          }
        }
      }
    };
    
    chartData.chartClass = 'with-3d-shadow with-transitions';
    
    return chartData;
  }
}