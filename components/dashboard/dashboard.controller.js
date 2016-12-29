/* global  angular */
(function () {
    'use strict';
    angular.module('sample')
            .controller('DashboardController', ['$scope', '$timeout', function ($scope, $timeout) {
                    $scope.barChart = {
                        options: {
                            legend: {
                                enabled: false
                            },
                            chart: {
                                type: 'bar'
                            }
                        },
                        series: [{
                                data: [10, 15, 12, 8, 7]
                            }],
                        title: {
                            text: ''
                        }
                    };
                    $scope.donutChart = {
                        options: {
                            plotOptions: {
                                pie: {
                                    depth: 80
                                }
                            },
                            chart: {
                                type: 'pie',
                                options3d: {
                                    enabled: true,
                                    alpha: 45
                                }
                            },
                            tooltip: {
                                enabled: false
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: ''
                        },
                        series: [{
                                innerSize: '50%',
                                data: [{
                                        name: 'Firefox',
                                        y: 10.38
                                    }, {
                                        name: 'Safari',
                                        y: 4.77
                                    }, {
                                        name: 'Opera',
                                        y: 0.91
                                    }]
                            }],
                        loading: false
                    };
                    $scope.pieChart = {
                        options: {
                            chart: {
                                type: 'pie'
                            }
                        },
                        series: [{
                                data: [{
                                        name: 'Firefox',
                                        y: 10.38
                                    }, {
                                        name: 'Safari',
                                        y: 4.77
                                    }, {
                                        name: 'Opera',
                                        y: 0.91
                                    }]
                            }],
                        title: {
                            text: ''
                        }
                    };
                    $scope.columnChart = {
                        options: {
                            legend: {
                                enabled: false
                            },
                            chart: {
                                type: 'column'
                            }
                        },
                        series: [{
                                data: [{
                                        name: 'Firefox',
                                        y: 10.38
                                    }, {
                                        name: 'Safari',
                                        y: 4.77
                                    }, {
                                        name: 'Opera',
                                        y: 0.91
                                    }]
                            }],
                        title: {
                            text: ''
                        }
                    };

                }]);

})();