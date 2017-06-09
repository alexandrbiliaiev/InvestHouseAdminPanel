var app = angular.module('investHouseAdmin', ['ngMaterial', 'ngMessages', 'ngQuill', 'ngFileUpload', 'ngRoute', 'ngCookies', 'pascalprecht.translate', 'angular-jsvat', 'ui.router', 'investHouseAdmin.services', 'investHouseAdmin.controllers', 'ng-mfb', 'ngMaterialDatePicker', 'daypilot', 'ui-notification'])

    .config(function ($translateProvider, $routeProvider, $stateProvider, $mdThemingProvider, $httpProvider, $mdDateLocaleProvider, NotificationProvider) {

        

        $stateProvider
            .state('home', {
                url: "/home",
                controller: 'MainController',
            })
            .state('error', {
                url: '/server_error',
                templateUrl: 'templates/error_503.html',
            })
            .state('test', {
                url: '/site/:id',
                controller: 'SiteController',
                templateUrl: 'templates/test.html',
            }).state('contragents', {
                url: "/ctg_all",
                templateUrl: 'templates/contragents/contragents_list.html'
            });

    }).config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
                ngQuillConfigProvider.set();
            }]);




app.run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
        //save the previous state in a rootScope variable so that it's accessible from everywhere
        $rootScope.previousState = from;
        $rootScope.previousStateParams = fromParams;
    });
});

angular.module('investHouseAdmin.filters', []);
angular.module('investHouseAdmin.services', []);
angular.module('investHouseAdmin.controllers', []);

