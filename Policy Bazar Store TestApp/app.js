angular.module('app', ['ngRoute', 'ngCookies'])
.config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
    $routeProvider
            .when('/product', {
                controller: 'productCtrl',
                templateUrl: 'home/product.view.html'
            })

            .when('/login', {
                controller: 'loginCtrl',
                templateUrl: 'login/login.view.html'
            })

            .when('/register', {
                controller: 'registerCtrl',
                templateUrl: 'register/register.view.html'
            })

            .otherwise({ redirectTo: '/login' });
} ])

.run(['$rootScope', '$location', '$cookieStore', '$http', function run($rootScope, $location, $cookieStore, $http) {
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }
} ]);