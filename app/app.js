var app = angular.module('investHouseAdmin', ['ngRoute', 'ngQuill', 'investHouseAdmin.services', 'ngFileUpload',
    'investHouseAdmin.controllers'])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/", {
                templateUrl: "/templates/main.html"
            })
            .when('/site/:id', {
                templateUrl: "/templates/pagePreferences.html",
                controller: 'SiteController'
            })
            .when("/site/:id/type/:typeId", {
                templateUrl: "/templates/investHouse/oNas.html",
                controller: 'SiteController'
            })
            .when("/investments", {
                templateUrl: "/templates/investHouse/investments.html",
                controller: 'InvestmentController'
            })
            .when("/investments/edit/:id", {
                templateUrl: "/templates/investHouse/investmentDetails.html",
                controller: 'InvestmentDetailController'
            });

    }).config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
        ngQuillConfigProvider.set();


    }]);

// use the HTML5 History API


angular.module('investHouseAdmin.filters', []);
angular.module('investHouseAdmin.services', []);
angular.module('investHouseAdmin.controllers', []);




