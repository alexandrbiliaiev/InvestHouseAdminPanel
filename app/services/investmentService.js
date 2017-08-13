angular.module('investHouseAdmin.services')
    .factory('investmentService', ['$http', '$rootScope', function($http, $rootScope) {

        var investments = {};


        investments.loadInvestments = function() {
            return $http({
                url: $rootScope.apiLink + 'api/investments/get',
                method: "GET"
            });
        }

        investments.loadInvestment = function(id) {
            return $http({
                url: $rootScope.apiLink + 'api/investments/get/' + id,
                method: "GET"
            });
        }

        investments.saveInvestment = function(investment) {
            return $http({
                url: $rootScope.apiLink + 'api/investments/save',
                method: "POST",
                data: investment
            });
        }

        investments.removeInvestment = function(id) {
            return $http({
                url: $rootScope.apiLink + 'api/investments/remove/' + id,
                method: "GET"
            });
        }



        return investments;

    }]);