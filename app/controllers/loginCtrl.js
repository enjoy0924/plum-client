/**
 * Created by Andy on 2015/10/6.
 */

app.controller('loginCtrl', function($scope, $http, $rootScope, ValidateCode){
    console.log("load login controller!");
    $scope.submit = function(){
        if(validate($scope.username, $scope.password, $http)){
            $rootScope.isLoggedIn = true;
        }else{
            $rootScope.isLoggedIn = false;
        }
    };

    $scope.getImageCode = function(){
        return ValidateCode.getImageValidateCode();
    };

    $scope.refreshImgCode = function(){
        $scope.getImageCode();
    };
    //$scope.getSMSCode = function(){
    //    return ValidateCode.getSMSValidateCode();
    //}
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