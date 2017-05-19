var app = angular.module("Cloudtop", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/main.html"
    })
    .when("/red", {
        templateUrl : "views/red.html"
    })
    .when("/green", {
        templateUrl : "views/green.html"
    })
    .when("/blue", {
        templateUrl : "views/blue.html"
    });
}); 
