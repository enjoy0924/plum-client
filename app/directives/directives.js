/**
 * Created by Andy on 2015/10/5.
 */

define(['./index'], function(angularControllerModule){
    angularControllerModule.directive('validateImg', function() {
        return {
            restrict: 'E',
            template: "<button class='btn btn-danger' ng-click=''>GO</button>"
        };
    });
})
