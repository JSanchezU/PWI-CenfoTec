var app = angular.module('ExamenApp', ['ngRoute','ngStorage', 'firebase']);

app.config(function ($routeProvider) { 
  $routeProvider 

    .when('/img', {  
      templateUrl: 'views/img.html' 
    }) 
    .when('/video', {  
      templateUrl: 'views/video.html' 
    }) 
    .when('/chat', { 
      templateUrl: 'views/chat.html' 
    })
});