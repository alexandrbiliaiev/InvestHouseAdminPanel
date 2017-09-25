angular.module('investHouseAdmin.controllers').controller('GeneralConfigurationController',
    function($scope, $location, $http, generalConfigurationService, $uibModal, Upload, $rootScope) {

        $scope.loadingInfo = true;

        $scope.configData;

        $scope.changeView = function(view) {
            $location.path(view); // path not hash
        }

        $scope.ff;
        $scope.cc;

        generalConfigurationService.loadInformation().then(function(response) {
            $scope.configData = response.data;
            $scope.loadingInfo = false;
        }, function(error) {
            ;
        });

        $scope.options = {

            swatch: true,

            swatchBootstrap: true,
            swatchOnly: true

        };


        $scope.uploadFile = function(file) {
            $scope.sendProgress = 0;
            file.upload = Upload.upload({
                url: $rootScope.apiLink + 'api/GeneralSettings/addBackgroundImage',
                data: {
                    file: file
                },
            });

            file.upload.then(function(response) {
                $scope.filepath = response.data.name;
                $scope.configData.backgroundImage = $rootScope.apiLink + $scope.filepath;
            }, function(error) {
                $state.go('error');
            });

        }




        $scope.saveConfiguration = function(c) {


            generalConfigurationService.saveConfigData(c).then(function(response) {
                $scope.changeView("/");
            }, function(error) {
                $state.go('error');
            });
        }



    });