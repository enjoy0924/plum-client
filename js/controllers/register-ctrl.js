/**
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('registerCtrl', ['$scope','ValidateService', function ($scope, ValidateService) {
        $scope.data = {};

        $scope.imgUrl = ValidateService.getImageCodeUrl();
        $scope.onImgRefresh = function(){
            $scope.imgUrl = ValidateService.getImageCodeUrl();
        }

        $scope.getSmsCode = function(){
            ValidateService.getSmsCode($scope.data.cellphone);
        }
    }]);
});