var app = angular.module('investHouseAdmin', ['ngRoute', 'ngQuill', 'ui.bootstrap', 'investHouseAdmin.services', 'ngFileUpload',
    'investHouseAdmin.controllers'])
    .config(function($routeProvider) {



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
            .when("/investments/add/:id", {
                templateUrl: "/templates/investHouse/investmentDetails.html",
                controller: 'InvestmentController'
            })
            .when("/investments/edit/:id", {
                templateUrl: "/templates/investHouse/investmentDetails.html",
                controller: 'InvestmentDetailController'
            })
            .when("/news/edit/:siteId/:articleId", {
                templateUrl: "/templates/investHouse/newsDetails.html",
                controller: 'NewsController'
            })
            .when("/news/:id", {
                templateUrl: "/templates/investHouse/news.html",
                controller: 'NewsController'
            })
            .when("/news/add/:siteId/:articleId", {
                templateUrl: "/templates/investHouse/newsDetails.html",
                controller: 'NewsController'
            });


    }).config(['ngQuillConfigProvider', function(ngQuillConfigProvider) {
    ngQuillConfigProvider.set();


}])
    .run(function($rootScope) {

        $rootScope.prod = false;
        if ($rootScope.prod) {
            $rootScope.apiLink = "http://bielka-002-site1.ctempurl.com/"
        } else {
            $rootScope.apiLink = "http://localhost:63031/";
        }
    });

// use the HTML5 History API


angular.module('investHouseAdmin.filters', []);
angular.module('investHouseAdmin.services', []);
angular.module('investHouseAdmin.controllers', []);




