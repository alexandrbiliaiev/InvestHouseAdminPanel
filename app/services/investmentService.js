angular.module('investHouseAdmin.services')
    .factory('investmentService', ['$http', function ($http) {

        var investments = {};


        investments.loadInvestments = function () {
            return $http({
                url: 'http://localhost:63031/api/investments/get',
                method: "GET"
            });
        }

        investments.loadInvestment = function (id) {
            return $http({
                url: 'http://localhost:63031/api/investments/get/' + id,
                method: "GET"
            });
        }

        investments.saveInvestment = function (investment) {
            return $http({
                url: 'http://localhost:63031/api/investments/save',
                method: "POST",
                data: investment
            });
        }

        investments.removeInvestment = function (id) {
            return $http({
                url: 'http://localhost:63031/api/investments/remove/' + id,
                method: "GET"
            });
        }



        return investments;

    }]);