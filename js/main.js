/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular/angular',
        'angular-route':'../lib/angular-route/angular-route',
        'angular-bootstrap':'../lib/angular-bootstrap/ui-bootstrap',
        'twitter-bootstrap':'../lib/bootstrap/dist/js/bootstrap',
        'jquery':'../lib/jquery/dist/jquery'
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
