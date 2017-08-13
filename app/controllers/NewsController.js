angular.module('investHouseAdmin.controllers').controller('NewsController',
    function($scope, $location, $http, newsService, $uibModal, Upload, $routeParams) {

        $scope.loadingInfo = true;

        $scope.news = [];

        $scope.siteId = $routeParams.id;

        newsService.loadNews($scope.siteId).then(function(response) {
            $scope.news = response.data;
            $scope.loadingInfo = false;
        }, function(error) {
            ;
        });

        $scope.removeArticle = function(id) {
            newsService.removeArticle(id).then(function(response) {

                if (response.data != true) {
                    return;
                }

                for (i in $scope.news) {
                    if ($scope.news[i].id != id) {
                        continue;
                    }

                    $scope.news.splice(i, 1);
                    return;
                }

            }, function(error) {
                ;
            });
        };



        $scope.uploadFile = function(file) {
            $scope.sendProgress = 0;
            file.upload = Upload.upload({
                url: $rootScope.apiLink + 'api/investments/addLogo',
                data: {
                    file: file
                },
            });

            file.upload.then(function(response) {
                $scope.filepath = response.data.name;
                $scope.investment.image = $rootScope.apiLink + $scope.filepath;
            }, function(error) {
                $state.go('error');
            });

        }

        $scope.open = function() {
            $uibModal.open({
                templateUrl: 'templates/investHouse/investmentAddModal.html',
                controller: 'InvestmentController',
                backdrop: true, //
                scope: $scope, // <-- I added this
                preserveScope: true
            });

        }


        $scope.saveInvestment = function(inv) {
            newsService.saveInvestment(inv).then(function(response) {
                $scope.investments.push(response.data);
                $scope.loadingInfo = false;
            }, function(error) {
                $state.go('error');
            });
        }

    });

