angular.module('investHouseAdmin.controllers').controller('InvestmentDetailController',
    function ($scope, $location, $http, investmentService, $routeParams, Upload) {

        $scope.filepath = null;


        $scope.loadingInfo = true;

        investmentService.loadInvestment($routeParams.id).then(function (response) {
            $scope.investment = response.data;
            $scope.loadingInfo = false;
        }, function (error) {
            $state.go('error');
        });

        $scope.saveInvestment = function (inv) {
            investmentService.saveInvestment(inv).then(function (response) {
                $scope.loadingInfo = false;
            }, function (error) {
                $state.go('error');
            });
        }

        $scope.uploadFile = function (file) {
            $scope.sendProgress = 0;
            file.upload = Upload.upload({
                url: 'http://localhost:63031/api/investments/addLogo',
                data: {
                    file: file
                },
            });

            file.upload.then(function (response) {
                $scope.filepath = response.data.name;
                $scope.investment.logo = "http://localhost:63031"+$scope.filepath;
            }, function (error) {
                $state.go('error');
            });

        }





    })