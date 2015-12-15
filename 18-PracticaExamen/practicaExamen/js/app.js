var app = angular.module('ChatApp', ['ChatApp.controllers', 'ChatApp.factories','ngStorage','ngCookies']);

app.config(function ($routeProvider) { 
  $routeProvider 

  .when('/home', { 
      templateUrl: 'views/home.html' 
    }) 
    .when('/login', { 
      templateUrl: 'views/login.html' 
    }) 
    .otherwise({ 
      templateUrl: 'views/404.html'
    }); 
});