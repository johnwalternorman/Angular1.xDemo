app.config(function($routeProvider) {

    $routeProvider
    .when("/", {
      //This is the default view and controller
      //example: http://localhost:8000/#/

        controller: "indexController",
        templateUrl : "views/main.html"
    })
    .when('/page:name', {
        /*  This allows you to call a generic Controller for
            any page by prefixing the url with page
            for example:  http://localhost:8000/#/page:red
        */

            controller:'pageController',
            templateUrl: function(urlattr)
            {
              var parameterName;
              parameterName = urlattr.name;
              parameterName =  parameterName.replace(":","");
              //alert(templateName);
              return 'views/' + parameterName + '.html';
            }
    })
    .when('/content:name', {
        /*  This allows you to call a generic Controller for
            any page by prefixing the url with page
            for example:  http://localhost:8000/#/content:about
        */

            controller:'contentController',
            templateUrl: function(urlattr)
            {
              var parameterName;
              parameterName = urlattr.name;
              parameterName = parameterName.replace(":","");
              //alert(templateName);
              return 'views/' + parameterName + '.html';
            }
    })
    .when("/bookList", {
      //This is a sample for calling a RESTful API
      //example: http://localhost:8000/#/bookList

        controller: "booksController",
        templateUrl : "views/books.html"
    })
    .when("/login", {
      //This is for loading your login form and controller
      //example: http://localhost:8000/#/login

        controller: "loginController",
        templateUrl : "views/login.html"
    });
});
