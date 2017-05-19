This is an AngularJS playground.

You should have Node Installed, which is the only requirement to begin running this project.

Their are three main files, that you should look at to get started.
1./clientRouting/ClientRouting.js
2./views/index.html
  a. /views/partials/footer.html
  b. /views/partials/header.html
  c. /views/partials/navigation.html
3./ServerRouting.js

ClientRouting.js is the file that handles all the client side routing for the application.

/views/index.html is the default page of the application

SeverRouting.js is the file that handles server side routing, but it is not the focus of this project anyway.  I did add two variables to the top of this page to allow you to change the default page of the application, although you should not need to.

To begin running the application, simply navigate to the this folder in the command line application for your system, and type the following:

node ServerRouting.js (This is a default Node Routing template that I modified)

This will start the application, once it is started, simply navigate to the following URL in your browser and begin experimenting with changing the code and seeing the results.

http://localhost:8000
