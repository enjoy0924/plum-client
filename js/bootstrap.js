/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'angular-route',
    'app',
    'routes'
], function (require, ng, route, app) {
    'use strict';

    //app.config(
    //
    //)
    //    .run(function($rootScope, AuthService) {
    //        $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    //
    //            if (!AuthService.userLoggedIn()) {
    //                if (next.templateUrl === "login.html") {
    //
    //                } else {
    //                    $location.path('/login');
    //                }
    //            }
    //        });
    //    });

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
