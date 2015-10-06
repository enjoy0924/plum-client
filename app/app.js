/**
 * Created by Andy on 2015/10/5.
 */
var app = angular.module("app", ["ngRoute"]);

app.config = function($providerRoute){
  $providerRoute.when('',{

  }).when('/login',{
        templateUrl : 'views/login.html'
  }).when('/index', {
        "check":function($rootScope, $location){
            if(!$rootScope.isLoggedIn){
                $location.path('/login')
            }
        },
      templateUrl: 'view/index.html'
  }).otherwise({
        templateUrl : 'views/login.html'
  })
};
