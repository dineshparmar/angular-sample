/* global angular */

(function () {
    'use strict';
    angular.module('sample', ['ui.router', 'loginModule', 'highcharts-ng'])
            .config(['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/login');
                    $stateProvider
                            .state('menu', {
                                abstract: true,
                                views: {
                                    '': {templateUrl: 'components/home/home.html'},
                                    'footer@menu': {templateUrl: 'components/home/footer.html'},
                                    'nav@menu': {templateUrl: 'components/menu/menu-vertical.html', controller: 'MenuController'},
                                    'header@menu': {templateUrl: 'components/home/header.html', controller: 'HeaderController'}
                                }
                            })
                            .state('menu.dashboard', {
                                url: '/dashboard',
                                templateUrl: 'components/dashboard/dashboard.html',
                                controller: 'DashboardController',
                                authenticate: true
                            })
                            .state('menu.search', {
                                url: '/search',
                                templateUrl: 'components/search/search.html',
                                controller: 'SearchController',
                                authenticate: true
                            })
                            .state('menu.dropdown', {
                                url: '/dropdown',
                                templateUrl: 'components/dropdown/dropdown.html',
                                controller: 'DropdownController',
                                authenticate: true
                            })
                            .state('login', {
                                url: '/login',
                                templateUrl: 'components/login/login.html',
                                controller: 'LoginController',
                                controllerAs: 'vm'
                            });
                }
            ]);
})();