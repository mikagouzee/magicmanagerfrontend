(function () {
    'use strict';
    //create the base App module
    angular.module('magicManagerApp', [
        // Angular modules

        // Custom modules
        // Call the default routes
        "magicManagerApp.routes",
        //Call the home page module
        "magicManagerApp.home",
        //Call the dashboard module
        "magicManagerApp.dashboard",
        //Call the card detail module
        "magicManagerApp.cardDetail",
        //call the gulp generated $templateCache module
        'magicManagerApp.templates',
		//the API config
		'magicManagerApp.config'
        // 3rd Party Modules
        
    ]);
})();
