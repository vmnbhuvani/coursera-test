(function () {
    'use strict';
    angular.module('myFirstApp', [])
        .controller('myFirstController', function ($scope) {
            $scope.name = "";
            $scope.sayHello = function () {
                return "Hello Vaman!";
            }

            $scope.totalValue = 0;
            $scope.displayNumeric = function () {
                var totalNameValue = calculateNumericForString($scope.name);
                $scope.totalValue = totalNameValue;
            };

            function calculateNumericForString(string) {
                var totalStringValue = 0;
                for (var i = 0; i < String.length; i++) {
                    totalStringValue += String.charCodeAt(i);
                }
                return totalStringValue;
            }
        });
})();