/* global  angular */
(function () {
    'use strict';
    angular.module('loginModule')
            .controller('LoginController', ['$state', function ($state) {
                    this.login = function () {
                        $state.go("menu.dashboard");
                    };
                }]);

})();