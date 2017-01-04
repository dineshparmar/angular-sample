/* global  angular */
(function () {
    'use strict';
    angular.module('sample')
            .controller('DropdownController', ['$scope', function ($scope) {
                    $scope.selectedData = [];
                    $scope.selectedData1 = [];
                    $scope.selectedData2 = [];
                    $scope.slider = {
                        options: {
                            orientation: 'horizontal',
                            min: 0,
                            max: 100,
                            range: 'min'
                        }
                    };
                    $scope.data = [
                        {
                            selected: "selected",
                            label: "B",
                            value: "B",
                            color: "4286f4",
                            icon: "glyphicon-stop"
                        },
                        {
                            selected: "noe",
                            label: "A",
                            value: "A",
                            color: "f44298",
                            icon: "glyphicon-stop"
                        },
                        {
                            selected: "none",
                            label: "C",
                            value: "C",
                            color: "f45342",
                            icon: "glyphicon-stop"
                        }
                    ];
                    $scope.data1 = [
                        {
                            selected: "selected",
                            label: "B",
                            value: "B",
                            color: "4286f4",
                            icon: "glyphicon-certificate"
                        },
                        {
                            selected: "noe",
                            label: "A",
                            value: "A",
                            color: "f44298",
                            icon: "glyphicon-certificate"
                        },
                        {
                            selected: "none",
                            label: "C",
                            value: "C",
                            color: "f45342",
                            icon: "glyphicon-certificate"
                        }
                    ];
                    $scope.data2 = [
                        {
                            selected: "selected",
                            label: "B",
                            value: "B",
                            color: "4286f4",
                            icon: "glyphicon-tree-deciduous"
                        },
                        {
                            selected: "noe",
                            label: "A",
                            value: "A",
                            color: "f44298",
                            icon: "glyphicon-tree-deciduous"
                        },
                        {
                            selected: "none",
                            label: "C",
                            value: "C",
                            color: "f45342",
                            icon: "glyphicon-tree-deciduous"
                        }
                    ];
                }]);
})();