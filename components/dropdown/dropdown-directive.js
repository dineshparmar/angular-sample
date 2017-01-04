/* global  angular */
(function () {
    'use strict';
    angular.module('sample').directive('dropdown', function () {

        return {
            restrict: 'A',
            scope: {data: '=input',
                output: '=output'},
            link: function (scope, element, attrs) {
                $(element).multiselect('dataprovider', scope.data);
                element.bind("change", function (event) {
                    var data = $(".btn-group.open").find("button").attr("name");
                    scope.output = data.split(",");
                    scope.$apply();
                });
            }
        };
    });
})();