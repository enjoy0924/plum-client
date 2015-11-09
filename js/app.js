/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular', 'angular-route', 'angular-bootstrap','angular-ui-route',
    './constants/index',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ngRoute',
        'ui.router',
        'app.constants',
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives'
    ]);
});
