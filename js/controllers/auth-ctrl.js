/**
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('authCtrl', ['$scope','validate', 'principal', function ($scope,validate, principal) {

        $scope._refreshImgCode = function(){ $scope._imageUrl = validate.getImageCode();}
        $scope._refreshImgCode();

        $scope._login = function(){
            var token = new Object();
            token.principal = $scope._username
            token.credential = $scope._password;
            token.verifyCode = $scope._validate_code;
            token.rememberMe = $scope._remember_me;

            principal.identity(token,true);
        }
    }]);
});