/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular.min',
        'angular-route':'../lib/angular-route/angular-route.min',
        'angular-ui-route':'../lib/angular-ui-router/release/angular-ui-router.min',
        'angular-bootstrap':'../lib/angular-bootstrap/ui-bootstrap.min',
        'twitter-bootstrap':'../lib/bootstrap/dist/js/bootstrap.min',
        'jquery':'../lib/jquery/dist/jquery.min'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route':{
            deps:['angular'],
            exports:'angular-route'
        },
        'angular-ui-route':{
            deps:['angular'],
            exports:'angular-ui-route'
        },
        'angular-bootstrap':{
            deps:['angular'],
            exports:'angular-bootstrap'
        },
        'jquery':{
            exports:'jquery'
        },
        'twitter-bootstrap':{
            deps:['jquery'],
            exports:'twitter-bootstrap'
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
