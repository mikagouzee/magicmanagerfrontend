angular.module(
  'magicManagerApp.charts.page.factory',
  [
    'magicManagerApp.dashboard.factory'
  ]
)
  .factory('chartsPageFactory',chartsPageFactory);

function chartsPageFactory (dashboardFactory,$q,$http) {
  var factory = {};
  
  factory.getChartPage = getChartPage;
  
  return factory;
  
  function getChartPage(chartPageTitle,localeCode){
    
    var deferred = $q.defer();
    
    var charts = [];
    
    $http.get('/mockApi/charts/chartpage/'+chartPageTitle+'.json').then(successCallback, errorCallback);
    
    function successCallback(response){
      var chartsInfo = response.data;
      var promises = [];
      for (var chartId in chartsInfo){
        var chartInfo = chartsInfo[chartId];
        var promise = dashboardFactory.getChart(chartInfo.dashboardName,chartInfo.chartName,localeCode,chartInfo.title,chartInfo.stateTitle,chartInfo.parentClass);
        promises.push(promise);
      }
      $q.all(promises).then(function(values){
        charts = values;
        deferred.resolve(charts);
      })
      
    };
    
    function errorCallback(response){
      deferred.reject(false);
    };
    
    return deferred.promise;
    
  }
}