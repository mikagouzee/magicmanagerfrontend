// the card detail routes module
angular.module(
   'magicManagerApp.cardDetail.routes',
  [
    //load the card detail controller
    'magicManagerApp.cardDetail.controller',
    //load ui-router
    //The de-facto solution to flexible routing with nested views in AngularJS
    //https://github.com/angular-ui/ui-router/
    'ui.router'
  ]
)
  .config(cardDetailRoute);

function cardDetailRoute($stateProvider) {
  $stateProvider.state(
    //the main cardDetail state 
    'cardDetail',
    {
      //the cardDetail url with an articleId parameter
      url: '/cardDetail/:articleId',
      //the template from $templateCache
      templateProvider: function($templateCache){
            return $templateCache.get('cardDetail/cardDetail.client.view.html');
      },
      //the controller for the card detail
      controller: 'cardDetailController',
       //the name of the controller object in the card detail view
      controllerAs: 'cardDetail'
    }
  )
}