/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl:'partials/login.html',
            controller:'authCtrl'
        });

        $routeProvider.when('/register',{
            templateUrl:'partials/register.html',
            controller:'registerCtrl'
        });

        $routeProvider.when('/welcome',{
            templateUrl:'partials/welcome.html',
            resolve:''
        });

        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});
