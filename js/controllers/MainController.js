angular.module('investHouseAdmin.controllers').controller('MainController',
    function ($scope, $location, $translate, $http, $state, $mdDialog, $routeParams, $cookies,
        contentService) {

     

        $scope.goToSite = function (siteId) {
            $state.go('test', {
                id: siteId
            });
        }

        $scope.goToHomePage = function () {
            $state.go('home');
        }

    })