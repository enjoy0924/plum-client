/**
 * Created by Andy on 2015/10/12.
 */

define(['../app'], function(app){
    'use strict';
    app.factory('sessionInjector', ['SessionService', function(SessionService) {
        debugger;
        var sessionInjector = {
            request: function(config) {
                if (!SessionService.isAnonymus()) {
                    config.headers['x-session-token'] = SessionService.getToken();
                }
                return config;
            }
        };
        return sessionInjector;
    }]);
    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('sessionInjector');
    }]);
})
