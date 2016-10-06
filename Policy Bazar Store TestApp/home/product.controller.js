angular.module('app').controller('productCtrl', ['UserService', '$scope', '$rootScope', function (UserService, $scope, $rootScope) {
    $scope.cart = [];

    $scope.productList = [
    {
        id: 1,
        image: '/img/laptop.png',
        productName: 'Laptop',
        price: 34000
    },
    {
        id: 2,
        image: '/img/iphone.png',
        productName: 'iPhone',
        price: 50000
    },
    {
        id: 3,
        image: '/img/shoes.png',
        productName: 'Shoes',
        price: 5000
    },
    {
        id: 4,
        image: '/img/helmet.png',
        productName: 'Helmet',
        price: 3000
    },
    {
        id: 5,
        image: '/img/musicsystem.png',
        productName: 'Music System',
        price: 15000
    }];

    $scope.addToCart = function (product) {
        $scope.cart.push(product);
    }
} ]);