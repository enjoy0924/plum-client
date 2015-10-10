/**
 * Created by Andy on 2015/10/5.
 */
define(['./index'], function(app){
   app.config(function($routeProvider){
        $routeProvider.when('/login',{
            templateUrl : 'app/views/login.html'
        }).when('/register',{
            templateUrl : 'app/views/register.html'
        }).when('/index', {
            "check":function($rootScope, $location){
                if(!$rootScope.isLoggedIn){
                    $location.path('/login')
                }
            },
            templateUrl: '/index.html'
        }).otherwise({
            templateUrl : './app/views/login.html'
        })
    }).config(function($httpProvider){
        $httpProvider.defaults.headers.post['Content-Type']='application/json;charset=utf-8';
    })

});


