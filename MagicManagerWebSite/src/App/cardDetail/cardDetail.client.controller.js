angular.module(
    "magicManagerApp.cardDetail.controller",
    ["magicManagerApp.productInfo.factory",
        "magicManagerApp.cardDetailElement.factory",
        "ui.router",
        "cmselementBuilder.directive",
        "product-tiret-profile-cms-elements.template",
        "keyvaluetables.directive",
        "toggleIconButton.directive",
        //add cmselements
    ]
    ).controller(
    "cardDetailController",
    cardDetailController
    );

function cardDetailController($stateParams, cardDetailElementFactory, productInfoFactory) {
    var vm = this;

    init();

    function init() {
        vm.articleId = $stateParams.articleId;
        productInfoFactory.getProductInfo(vm.articleId).then(setProductInfo(response));
        vm.element = cardDetailElementFactory.getProfile(vm.articleId, vm.productInfo);
    }

    function setProductInfo(response) {
        if (response[0]) {
            vm.productInfo = response[1];
        };
    }
}