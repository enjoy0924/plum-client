/**
 * 权限认证服务
 *
 * Created by Andy on 2015/11/7.
 */
define(['./module'], function (services) {
    services.service('AuthService', function ($q, $http, USER_ROLES, REQ_URLS) {
        var LOCAL_TOKEN_KEY = 'yourTokenKey';
        var username = '';
        var isAuthenticated = false;
        var role = '';
        var authToken;

        function loadUserCredentials() {
            var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
            if (token) {
                useCredentials(token);
            }
        }

        function storeUserCredentials(token) {
            window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
            useCredentials(token);
        }

        function useCredentials(token) {
            username = token.split('.')[0];
            isAuthenticated = true;
            authToken = token;

            if (username == 'admin') {
                role = USER_ROLES.ROLE_ADMIN
            }
            if (username == 'user') {
                role = USER_ROLES.ROLE_PUBLIC
            }

            // Set the token as header for your requests!
            $http.defaults.headers.common['X-Auth-Token'] = token;
        }

        function destroyUserCredentials() {
            authToken = undefined;
            username = '';
            isAuthenticated = false;
            $http.defaults.headers.common['X-Auth-Token'] = undefined;
            window.localStorage.removeItem(LOCAL_TOKEN_KEY);
        }

        var login = function (loginParams) {
            return $q(function (resolve, reject) {
                $http.post(REQ_URLS.URL_AUTH_POST_LOGIN, loginParams)
                    .success(function (data, status, headers, config) {
                        //$window.sessionStorage.token = data.token;
                        //$scope.isAuthenticated = true;
                        //var encodedProfile = data.token.split('.')[1];
                        //var profile = JSON.parse(url_base64_decode(encodedProfile));
                        //$scope.welcome = 'Welcome ' + profile.first_name + ' ' + profile.last_name;
                        if(data.result.code == 0){
                            storeUserCredentials(name +'.'+ data.token);
                            resolve(data);
                        }
                    })
                    .error(function (data, status, headers, config) {
                        // Erase the token if the user fails to log in
                        //delete $window.sessionStorage.token;
                        //$scope.isAuthenticated = false;
                        //
                        //// Handle login errors here
                        //$scope.error = 'Error: Invalid user or password';
                        //$scope.welcome = '';
                        reject('Login Failed.');
                    });

                //if ((name == 'admin@plum' && pw == 'admin') || (name == 'user' && pw == '1')) {
                //    // Make a request and receive your auth token from your server
                //    storeUserCredentials(name + '.yourServerToken');
                //    resolve('Login success.');
                //} else {
                //    reject('Login Failed.');
                //}
            });
        };

        var logout = function () {
            destroyUserCredentials();
        };

        var isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
        };

        loadUserCredentials();

        return {
            login: login,
            logout: logout,
            isAuthorized: isAuthorized,
            isAuthenticated: function () {
                return isAuthenticated;
            },
            username: function () {
                return username;
            },
            role: function () {
                return role;
            }
        };
    }).factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
            return {
                //request:function(config){  //所有的http请求都加上token字段,这里也可以直接加上任何请求时需要加上的字段
                //    config.headers = config.headers || {};
                //    if ($window.sessionStorage.token) {
                //        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                //    }
                //    return config;
                //},
                responseError: function (response) {
                    $rootScope.$broadcast({
                        401: AUTH_EVENTS.NOT_AUTHENTICATED,
                        403: AUTH_EVENTS.NOT_AUTHORIZED
                    }[response.status], response);
                    return $q.reject(response);
                }
            };
        }).config(function ($httpProvider) {
            $httpProvider.interceptors.push('AuthInterceptor');
        });
})