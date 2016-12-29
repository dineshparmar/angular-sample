/* global angular */

(function () {
    'use strict';
    angular.module('sample').directive('menu', ['$timeout', '$window', function ($timeout, $window) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        scope.height = angular.element(document.querySelector('#content')).height();
                        if (scope.height < 550) {
                            element.css('height', 550);
                        } else {
                            element.css('height', scope.height);
                        }
                    });
//                    angular.element($window).bind('resize', function () {
//                        scope.height = angular.element(document.querySelector('#content')).height();
//                        if (scope.height < 550) {
//                            element.css('height', 550);
//                        } else {
//                            element.css('height', scope.height);
//                        }
//                    });
                }
            };
        }]);
})();
