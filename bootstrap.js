/**
 * Created by G_dragon on 2015/10/9.
 */
/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    './app/app'
], function (require, ng) {
    require(['domReady!'], function (document) {
        return ng.bootstrap(document, ['app']);
    });
});