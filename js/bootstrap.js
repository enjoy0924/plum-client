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

    app.config(      //配置数据源，能够被配置的只有provider对象和常量对象

    )
        .run(function($rootScope, AuthService) {  //RUN块里面一般会进行事件注册
            $rootScope.$on('$routeChangeStart', function(evt, next, current) {
                // 如果用户未登录
                if (!AuthService.userLoggedIn()) {
                    if (next.templateUrl === "login.html") {
                        // 已经转向登录路由因此无需重定向
                    } else {
                        $location.path('/login');
                    }
                }
            });
        });

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
