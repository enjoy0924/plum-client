/**
 * Created by Andy on 2015/10/19.
 */
define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('fsCtrl',['$scope', function($scope){
        $scope.files = [
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:1},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:2},
            {name:'my file', type:2}
        ];
    }]);
});