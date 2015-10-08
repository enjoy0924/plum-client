/**
 * Created by Andy on 2015/10/8.
 */
define([
        'constants/index',
        'controllers/index',
        'directives/index',
        'filters/index',
        'services/index'
    ]
    ,function(){
    return angular.module("app", [
        "ngRoute",
        "app.angularConstantModule",
        "app.angularControllerModule",
        "app.angularDirectiveModule",
        "app.angularFilterModule",
        "app.angularServiceModule"
    ])
});