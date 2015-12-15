app.controller('ChatController', ['$scope', '$routeParams', '$location', 'ChatServices', function($scope, $routeParams, $location, AgendaServices){	 
console.log("HomeController");
	
	AgendaServices.authenticationLogin();

    AgendaServices.getUserinfos().success(function(data) {
        $scope.infoUser = data.user;

    });

    $scope.logOut = function() {

    	localStorage.clear();

    	var path = $location.path('/login');
            return path;
    };

}]);