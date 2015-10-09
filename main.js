/**
 * Created by G_dragon on 2015/10/9.
 */

require.config({

    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angular-route' : 'bower_components/angular-route/angular-route.min',
        'jquery':'bower_components/jquery/dist/jquery.min',
        //'bootstrap':'bower_components/bootstrap/dist/js/bootstrap.min',
        'domReady':'bower_components/requirejs-domready/domReady'
    },
    //定义库文件的加载顺序
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery': {
            exports: 'jquery'
        },
        'bootstrap':{
          deps:['jquery']
        },
        'angular-router': {
            deps: ['angular']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});