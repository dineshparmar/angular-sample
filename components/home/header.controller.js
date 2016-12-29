
/* global  angular */
(function () {
    'use strict';
    angular.module('sample')
            .controller('HeaderController', ['$scope', '$state', function ($scope, $state) {
                    $scope.logout = function () {
                        $state.go('login');
                    };
                }]);

})();