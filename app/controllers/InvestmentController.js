angular.module('investHouseAdmin.controllers').controller('InvestmentController',
    function ($scope, $location, $http, investmentService) {

        $scope.loadingInfo = true;

        $scope.investments = [];



        investmentService.loadInvestments().then(function (response) {
            $scope.investments = response.data;
            $scope.loadingInfo = false;
        }, function (error) {
            ;
        });

        $scope.removeInvestment = function (id) {
            investmentService.removeInvestment(id).then(function (response) {
                
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

            }, function (error) {
                ;
            });
        };




    });