angular.module('investHouseAdmin.controllers').controller('InvestmentDetailController',
    function($scope, $location, $http, investmentService, $routeParams, Upload, $rootScope) {

        $scope.filepath = null;

        $scope.changeView = function(view) {
            $location.path(view); // path not hash
        }

        if ($routeParams.id == 0) {
            $scope.investment = {
                id: 0,
                logo: null,
                link: null,
                done: false,
                name: null,
                nameUa: null,
                description: null,
                descriptionUa: null
            };
        } else {
            investmentService.loadInvestment($routeParams.id).then(function(response) {
                $scope.investment = response.data;
                $scope.loadingInfo = false;
            }, function(error) {});
        }



        $scope.loadingInfo = true;



        $scope.saveInvestment = function(inv) {
            investmentService.saveInvestment(inv).then(function(response) {
                $scope.loadingInfo = false;
                $scope.changeView("/investments");
            }, function(error) {});
        }


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
                $scope.investment.logo = $rootScope.apiLink + $scope.filepath;
            }, function(error) {});

        }





    });