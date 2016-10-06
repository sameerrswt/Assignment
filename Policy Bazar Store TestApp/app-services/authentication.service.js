angular.module('app')
.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', function ($http, $cookieStore, $rootScope, $timeout, UserService) {
    var service = {};

    service.Login = Login;
    service.SetCredentials = SetCredentials;
    service.ClearCredentials = ClearCredentials;

    return service;

    function Login(username, password, callback) {

        $timeout(function () {
            var response;
            UserService.GetByUsername(username).then(function (user) {
                if (user !== null && user.password === password) {
                    response = { success: true };
                } else {
                    response = { success: false, message: 'Username or password is incorrect' };
                }
                callback(response);
            });
        }, 1000);

    }

    function SetCredentials(username, password) {
        var authdata = btoa(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
        $cookieStore.put('globals', $rootScope.globals);
    }

    function ClearCredentials() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic';
    }

} ]);