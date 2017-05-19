app.controller('pageController', function($scope,basketball) {
    $scope.message = "You are using the...";
    $scope.bestBasketballTeam = basketball.getBest();
    $scope.getMessage = function() {
        return $scope.message + ' Page Controller';
    };
});
