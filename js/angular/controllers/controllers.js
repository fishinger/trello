'use strict';
var app = angular.module('app', [
		'ui.router'
	]);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: '/pages/today.html'
		})
})
app.controller('mainCtrl', ["$scope", function($scope){

}]);

