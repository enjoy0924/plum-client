/**
 * Created by Andy on 2015/11/7.
 */

define(['./module'], function(controllers){
    controllers.controller('AppCtrl', function($scope, $state, AuthService, AUTH_EVENTS) {
        $scope.username = AuthService.username();

        $scope.$on(AUTH_EVENTS.NOT_AUTHORIZED, function(event) {
            console.log("not authorized");
            //var alertPopup = $ionicPopup.alert({
            //    title: 'Unauthorized!',
            //    template: 'You are not allowed to access this resource.'
            //});
        });

        $scope.$on(AUTH_EVENTS.NOT_AUTHENTICATED, function(event) {
            console.log("not authenticated");
            AuthService.logout();
            $state.go('login');
            //var alertPopup = $ionicPopup.alert({
            //    title: 'Session Lost!',
            //    template: 'Sorry, You have to login again.'
            //});
        });
    })
})
