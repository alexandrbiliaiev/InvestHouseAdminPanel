angular.module('investHouseAdmin.controllers').controller('NewsDetailController',
    function($scope, $location, $http, newsService, $routeParams, Upload, $rootScope) {

        $scope.filepath = null;

        $scope.loadingInfo = true;

        $scope.changeView = function(view) {
            $location.path(view); // path not hash
        }

        if ($routeParams.articleId == 0) {
            $scope.article = {
                id: 0,
                siteId: $routeParams.siteId,
                title: null,
                titleUa: null,
                text: null,
                textUa: null,
                image: null,
                creationDate: null
            };
        } else {
            newsService.loadArticle($routeParams.siteId, $routeParams.articleId).then(function(response) {
                $scope.article = response.data;
                $scope.loadingInfo = false;
            }, function(error) {
                $state.go('error');
            });
        }

        $scope.saveArticle = function(article) {
            newsService.saveArticle(article).then(function(response) {
                $scope.loadingInfo = false;
                $scope.changeView("/news/" + $routeParams.siteId);
            }, function(error) {
                $state.go('error');
            });
        }


        $scope.uploadFile = function(file) {
            $scope.sendProgress = 0;
            file.upload = Upload.upload({
                url: $rootScope.apiLink + 'api/news/addImage',
                data: {
                    file: file
                },
            });

            file.upload.then(function(response) {
                $scope.filepath = response.data.name;
                $scope.article.image = $rootScope.apiLink + $scope.filepath;
            }, function(error) {
                $state.go('error');
            });

        }





    });