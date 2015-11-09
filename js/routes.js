/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, USER_ROLES) {
        $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })
            .state('register',{
                url:'/register',
                templateUrl: 'templates/register.html',
                controller:'registerCtrl'
            })
            .state('main', {
                url: '/main',
                //abstract: true,
                templateUrl: 'templates/main.html'
            })
            .state('main.dash', {
                url: 'main/dash',
                views: {
                    'dash-tab': {
                        templateUrl: 'templates/dashboard.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('main.public', {
                url: 'main/public',
                views: {
                    'public-tab': {
                        templateUrl: 'templates/public.html'
                    }
                }
            })
            .state('main.admin', {
                url: 'main/admin',
                views: {
                    'admin-tab': {
                        templateUrl: 'templates/admin.html'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.ROLE_ADMIN]
                }
            });
        //$urlRouterProvider.otherwise('/main/dash');
        $urlRouterProvider.otherwise("login");
    })

    //.run(function($httpBackend){
    //    $httpBackend.whenGET('http://localhost:8100/valid')
    //        .respond({message: 'This is my valid response!'});
    //    $httpBackend.whenGET('http://localhost:8100/notauthenticated')
    //        .respond(401, {message: "Not Authenticated"});
    //    $httpBackend.whenGET('http://localhost:8100/notauthorized')
    //        .respond(403, {message: "Not Authorized"});
    //
    //    $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
    //})

    .run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
        $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {

            if ('data' in next && 'authorizedRoles' in next.data) {
                var authorizedRoles = next.data.authorizedRoles;
                if (!AuthService.isAuthorized(authorizedRoles)) {
                    event.preventDefault();
                    $state.go($state.current, {}, {reload: true});
                    $rootScope.$broadcast(AUTH_EVENTS.NOT_AUTHORIZED);
                }
            }

            if (!AuthService.isAuthenticated()) {
                if (next.name !== 'login' && next.name != 'register') {
                    event.preventDefault();
                    $state.go('login');
                }
            }
        });
    });
});
