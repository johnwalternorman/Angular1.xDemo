app.controller('contentController', function($scope,$location) {
    $scope.message = "You are using the...";
    $scope.currentURL = $location.absUrl();
    $scope.getMessage = function() {
        return $scope.message + ' Content Controller';
    };
    $scope.daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    $scope.getURLMessage = function() {
        return $scope.currentURL;
    };
});
