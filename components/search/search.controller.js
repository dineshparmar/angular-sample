/* global  angular */
(function () {
    'use strict';
    angular.module('sample')
            .controller('SearchController', ['$scope', function ($scope) {
                    $scope.people = [
                        {firstName: "John", lastName: "Doe", age: 30},
                        {firstName: "Bob", lastName: "Smith", age: 26},
                        {firstName: "Jack", lastName: "White", age: 47},
                        {firstName: "Michael", lastName: "Green", age: 41}
                    ];

                    // Utility functions
                    $scope.customArrayFilter = function (item) {
                        return (item.lastName.indexOf('it') !== -1 && item.age >= 40);
                    };

                }]);

})();