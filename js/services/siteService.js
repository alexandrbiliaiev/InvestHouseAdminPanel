angular.module('investHouseAdmin.services')
    .factory('siteService', ['$http', function ($http) {

        var site = {};


        site.loadSite = function (siteData) {
            return $http({
                url: 'http://localhost:63031/api/admin/site/get',
                method: "POST",
                data: siteData
            });
        }

      
        return site;

    }]);