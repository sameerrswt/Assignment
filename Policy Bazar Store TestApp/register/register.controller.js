angular.module('app')
.controller('registerCtrl', ['UserService', '$scope', '$location', '$rootScope', 'FlashService', function (UserService, $scope, $location, $rootScope, FlashService) {

    $scope.pattern = {
        onlyString: /^[a-zA-Z\s]*$/,
        password: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*()_+])/
      };
      
    $scope.register = function () {
        $scope.dataLoading = true;
        UserService.Create($scope.user).then(function (response) {
            if (response.success) {
                FlashService.Success('Registration successful', true);
                $location.path('/login');
            } else {
                FlashService.Error(response.message);
                $scope.dataLoading = false;
            }
        });
    }
} ]);
