angular.module('investHouseAdmin.controllers').controller('InvestmentController',
    function($scope, $location, $http, investmentService, $uibModal, Upload, $rootScope) {

        $scope.loadingInfo = true;

        $scope.investments = [];


        investmentService.loadInvestments().then(function(response) {
            $scope.investments = response.data;
            $scope.loadingInfo = false;
        }, function(error) {
            ;
        });

        $scope.removeInvestment = function(id) {
            investmentService.removeInvestment(id).then(function(response) {

                if (response.data != true) {
                    return;
                }

                for (i in $scope.investments) {
                    if ($scope.investments[i].id != id) {
                        continue;
                    }

                    $scope.investments.splice(i, 1);
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
                $scope.investment.logo = $rootScope.apiLink + $scope.filepath;
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
            investmentService.saveInvestment(inv).then(function(response) {
                $scope.investments.push(response.data);
                $scope.loadingInfo = false;
            }, function(error) {
                $state.go('error');
            });
        }



    });