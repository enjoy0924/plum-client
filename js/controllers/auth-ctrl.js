/**
 * Created by Andy on 2015/11/7.
 */
define(['./module'], function(controllers){
    controllers.controller('loginCtrl', function($scope, $state, AuthService, ValidateService) {
        $scope.data = {};

        //$scope.setCurrentUsername = function(name) {
        //    $scope.username = name;
        //};
        //$scope.onImgRefresh();
        $scope.imgUrl = ValidateService.getImageCodeUrl();

        $scope.onImgRefresh = function(){
            $scope.imgUrl = ValidateService.getImageCodeUrl();
        };

        $scope.login = function(data) {
            console.log(JSON.stringify(data));
            AuthService.login(data).then(function(authenticated) {
                $state.go('main', {}, {reload: true});  //如果登录成功，调整到main
                //$scope.setCurrentUsername(data.username);
            }, function(err) {
                //var alertPopup = $ionicPopup.alert({
                //    title: 'Login failed!',
                //    template: 'Please check your credentials!'
                //});
            });
        };
    })
})