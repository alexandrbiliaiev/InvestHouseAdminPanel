angular.module('investHouseAdmin.services')
    .factory('generalConfigurationService', ['$http', '$rootScope', function($http, $rootScope) {

        var generalSetting = {};


        generalSetting.loadInformation = function() {
            return $http({
                url: $rootScope.apiLink + 'api/generalSettings/get',
                method: "GET"
            });
        }

        generalSetting.saveConfigData = function(configData) {
            return $http({
                url: $rootScope.apiLink + 'api/GeneralSettings/save',
                method: "POST",
                data: configData
            });
        }

        return generalSetting;

    }]);