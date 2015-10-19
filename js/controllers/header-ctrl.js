/**
 * Created by Andy on 2015/10/18.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('headerCtrl',['$scope', function($scope){
        $scope.taskSum = {
            num :101
        };

        $scope.messageSum = {
            num : 10
        }

        $scope.notificationSum = {
            num : 5
        }
    }]);
});