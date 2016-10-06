angular.module('app')
.controller('loginCtrl', ['$location', '$scope', 'AuthenticationService', 'FlashService', function ($location, $scope, AuthenticationService, FlashService) {

    AuthenticationService.ClearCredentials();
    
    $scope.login = function () {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                $location.path('/product');
            } else {
                FlashService.Error(response.message);
                $scope.dataLoading = false;
            }
        });
    };
} ]);
