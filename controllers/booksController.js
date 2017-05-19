
// This calls a remote RESTful API and therefore, it may take a while to load

app.controller('booksController', function($scope, $http) {
  $http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
    .then(function(response) {
      $scope.data = response.data;
    });
});
