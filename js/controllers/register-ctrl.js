/**
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('registerCtrl', ['$scope','validate', function ($scope,validate) {

        $scope._refreshImgCode = function(){
            $scope._imageUrl = validate.getImageCode();
        }
        $scope._refreshImgCode();

        $scope._getSmsCode = function(){
            validate.getSmsCode($scope._cellphone);
        }
    }]);
});