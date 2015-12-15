app.controller('LoginController', ['$scope', '$routeParams', '$cookies', '$cookieStore', '$location', 'AgendaServices', function($scope, $routeParams, $cookies, $cookieStore, $location, AgendaServices){	 
 
    $scope.message = ' ';

    $scope.logIn = function() {
 		AgendaServices.postLogIn($scope.userLogin).success(function(data) {
        	$scope.logins = data;
            
        	
            var path = $location.path('/home');
            return path;
    	});

        AgendaServices.postLogIn($scope.userLogin).error(function(data) {
            $scope.gg = data;
            $scope.message = "Invalid login data. Try again!!!";
        });   
    };

    $scope.cookieUp = function() {
    	$cookies.SWITCHER = 'dev'; 
    	console.log($cookies.SWITCHER);
    };

    $scope.cookieDown = function() {
 		$cookieStore.remove('SWITCHER');
    };
}]);