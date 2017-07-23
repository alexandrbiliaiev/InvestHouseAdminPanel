angular.module('investHouseAdmin.controllers').controller('SiteController',
    function ($scope, $http, contentService, siteService, $routeParams) {

        $scope.contentEdit = false;

        var siteId =
            {
                id: $routeParams.id
            };

        var siteContent =
            {
                id: $routeParams.id,
                contentType: $routeParams.typeId
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

        siteService.loadSite(siteId).then(function (response) {
            $scope.site = response.data;
            $scope.loadingInfo = false;
        }, function (error) {
            $state.go('error');
        });

        contentService.loadContent(siteContent).then(function (response) {
            $scope.content = response.data;
            $scope.loadingContent = false;
        }, function (error) {
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