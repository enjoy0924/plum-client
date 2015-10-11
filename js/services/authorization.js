/**
 * 权限服务
 *
 * Created by Andy on 2015/10/11.
 */
define(['./module'], function (services) {
    services.factory('authorization', ['$rootScope', '$state', 'principal',
        function($rootScope, $state, principal) {
            return {
                authorize: function() {
                    return principal.identity()
                        .then(function() {
                            var isAuthenticated = principal.isAuthenticated();

                            if ($rootScope.toState.data.roles && $rootScope.toState.data.roles.length > 0 && !principal.isInAnyRole($rootScope.toState.data.roles)) {
                                if (isAuthenticated) $state.go('accessdenied'); // user is signed in but not authorized for desired state
                                else {
                                    // user is not authenticated. stow the state they wanted before you
                                    // send them to the signin state, so you can return them when you're done
                                    $rootScope.returnToState = $rootScope.toState;
                                    $rootScope.returnToStateParams = $rootScope.toStateParams;

                                    // now, send them to the signin state so they can log in
                                    $state.go('signin');
                                }
                            }
                        });
                }
            };
        }
    ])
})