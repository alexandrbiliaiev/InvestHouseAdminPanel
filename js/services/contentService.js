angular.module('investHouseAdmin.services')
    .factory('contentService', ['$http', function ($http) {

        var content = {};


        content.loadContent = function (site) {
            return $http({
                url: 'http://localhost:63031/api/admin/content/get',
                method: "POST",
                data: site
            });
        }

      
        return content;

    }]);