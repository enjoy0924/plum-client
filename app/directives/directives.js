/**
 * Created by Andy on 2015/10/5.
 */

app.directive('validateImg', function() {
    return {
        restrict: 'E',
        template: "<button class='btn btn-danger' ng-click=''>GO</button>"
    };
});

app.directive('validateSms', function() {
    return {
        restrict: 'E',
        template: "<label>User:<input type='text' ng-model='username'></label><button ng-click='getGitHubUser(username)'>GO</button>"
    };
});