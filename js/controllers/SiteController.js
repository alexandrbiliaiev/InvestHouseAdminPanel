angular.module('investHouseAdmin.controllers').controller('SiteController',
    function ($scope, $location, $translate, $http, $state, $mdDialog, $routeParams, $cookies,
        contentService, countriesService, contactpersonsService, addressesService, offersService, employeesService,
        fileService, calendarService, contragentsService, siteService) {


        var siteId =
            {
                id: $state.params.id
            };

        $scope.editing = false;

        $scope.loadingInfo = true;
        $scope.loadingContent = true;

        $scope.editSiteData = function () {
            $scope.editing = true;
        };

        $scope.saveSiteData = function () {
            $scope.editing = false;
        };

        siteService.loadSite(siteId).success(function (response) {
            $scope.site = response;
            $scope.loadingInfo = false;
        }).error(function () {
            $state.go('error');
        });

        contentService.loadContent(siteId).success(function (response) {
            $scope.content = response;
            $scope.loadingContent = false;
        }).error(function () {
            $state.go('error');
        });


        $scope.title = '';
        $scope.changeDetected = false;

        $scope.editorCreated = function (editor) {
            console.log(editor);
        };
        $scope.contentChanged = function (editor, html, text) {
            $scope.changeDetected = true;
            console.log('editor: ', editor, 'html: ', html, 'text:', text);
        };


    });