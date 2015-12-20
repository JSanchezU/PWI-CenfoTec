angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

	$scope.lists = [
		{
			"name": "prueba1",
         	"img": "img/120x120.jpg",
         	"date": "2015-12-12"
		},
		{
			"name": "prueba2",
         	"img": "img/120x120.jpg",
         	"date": "2015-12-12"
		},
		{
			"name": "prueba3",
         	"img": "img/120x120.jpg",
         	"date": "2015-12-12"
		}
	];

	$scope.prueba = 
		{
			"name": "prueba",
         	"img": "img/120x120.jpg",
         	"date": "2015-12-12",
         	"info": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
		};

	/*$scope.takePhoto = function(){
	  	navigator.camera.getPicture(function(){
	    	
	  	},
	  	function(error){
	      console.error(error);
	    },
	  	{
	    	quality: 25
	  	}
  		);
	};*/

})
