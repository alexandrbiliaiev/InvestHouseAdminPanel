angular.module('investHouseAdmin.services')
    .factory('siteService', ['$http', function ($http) {

        var site = {};


        site.loadSite = function (siteData) {
            return $http({
                url: 'http://alexidomka-001-site1.gtempurl.com/api/admin/site/get',
                method: "POST",
                data: siteData
            });
        }

      
        return site;

    }]);