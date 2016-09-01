/**
 * CLIENT-SIDE JAVASCRIPT
 */

var heroApp = angular.module('heroApp', ['ngRoute']);


heroApp.config(['$routeProvider', function($routeProvider) {
    //partials;
    $routeProvider.
    when('/createHero', {
        templateUrl: '/views/partials/createHero.html',
        controller: 'heroCreationController'
    }).
    when('/manageHeros', {
        templateUrl: '/views/partials/manageHeros.html',
        controller: 'heroManagementController'
    }).
    otherwise({
        redirectTo: "/home"
    });
}]);
