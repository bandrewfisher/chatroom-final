var chatApp = angular.module('chatApp', []);
chatApp.controller('chatCtrl', function($scope, $http) {

    $scope.addMessage = function($event) {
        console.log("hello");
    }
});

