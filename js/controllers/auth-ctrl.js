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
            token.appKey = "645ba616-370a-43a8-a8e0-993e7a590cf0";

            principal.identity(token,true).then(
                function(data){   //promise resolve
                    alert('successful ' + JSON.stringify(data));
                },
                function(data){   //promise reject
                    alert('error happened ' + JSON.stringify(data));
                }
            );
        }
    }]);
});