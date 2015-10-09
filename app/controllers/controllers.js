/**
 * Created by Andy on 2015/10/5.
 */
define(['./index'], function(angularControllerModule){
    angularControllerModule.controller('loginCtrl', function($scope, $http, $rootScope,$location, ValidateCode){
        console.log("load login controller!");
        $scope.submit = function(){
            if(validate($scope.username, $scope.password, $http)){
                $rootScope.isLoggedIn = true;
            }else{
                $rootScope.isLoggedIn = false;
            }
        };
        $scope.getSmsCode = function(){
            getSMSValidateCode($scope.cellphone, $http);
        }
        $scope.getImageCode = function(){ return ValidateCode.getImageValidateCode();};
        $scope.refreshImgCode = function(){ $scope.validateImgUrl = $scope.getImageCode() + '?d=' + new Date();};

        $scope.locRegister = function(){
            $location.path('register');
        };

        //调用获取验证码
        $scope.refreshImgCode();
    });
});

var validate = function(username, password,$http){
    var parameters = {
        username : username,
        password : password
    };

    $http.post('http://192.168.0.100:8080/cas/uservalidate', parameters)
        .success(function(responseData){
            alert(responseData)
        }).error(function(){
            alert('error happened');
        });
};

var getSMSValidateCode = function(cellphone, $http){
    var params = {
        cellphone : cellphone
    };
    $http.post('http://localhost:8080/cas/validate/getsms', params)
        .success(function(responseData){
            alert(responseData)
        }).error(function(){
            alert('error happened');
        });
}