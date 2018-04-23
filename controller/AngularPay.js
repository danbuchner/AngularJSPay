var mainApp = angular.module("AngularTransactions", ['ngRoute']);
mainApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.

    when('/listall', {
      templateUrl: 'listTransactions.htm',
      controller: 'ListTransactions'
    }).

    when('/addTransaction', {
      templateUrl: 'addTransaction.htm',
      controller: 'AddTransaction'
    }).

    otherwise({
      redirectTo: '/listall'
    });
}]);

mainApp.controller('ListTransactions', function ($scope, $http) {
  $http.get('http://localhost:8083/listAll').
    then(function (response) {
      $scope.message = response.data;
    });
});

mainApp.controller('AddTransaction', function ($scope) {
  $scope.message = "This page will be used to add Transactions";
});