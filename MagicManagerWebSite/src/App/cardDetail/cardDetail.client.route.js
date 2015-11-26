angular.module(
   'magicManagerApp.cardDetail.routes',
  [
    'magicManagerApp.cardDetail.controller',
    'ui.router'
  ]
)
  .config(cardDetailRoute);

function cardDetailRoute($stateProvider) {
  $stateProvider.state(
    'cardDetail',
    {
      url: '/cardDetail/:articleId',
      templateProvider: function($templateCache){
            return $templateCache.get('cardDetail/cardDetail.client.view.html');
      },
      controller: 'cardDetailController',
      controllerAs: 'cardDetail'
    }
  )
}