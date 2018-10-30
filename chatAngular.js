var chatApp = angular.module('chatApp', []);
chatApp.controller('chatCtrl', function($scope, $http) {

    $scope.addMessage = function($event) {
        $scope.messages.push({
            content: $scope.messageContent,
            time: "2:26pm"
        })
    }
});

