/**
 * Created by Andy on 2015/10/8.
 */
define([
        'angular',
        'angular-route',
        './constants/index',
        './controllers/index',
        './directives/index',
        './filters/index',
        './services/index'
    ] ,function(ng){
    return ng.module('abc', [
        "ngRoute",
        "app.angularConstantModule",
        "app.angularControllerModule",
        "app.angularDirectiveModule",
        "app.angularFilterModule",
        "app.angularServiceModule"
    ])

});