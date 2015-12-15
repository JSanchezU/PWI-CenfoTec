app.controller('LoginController', ['$scope', '$routeParams', '$location', 'ExamenServices', function($scope, $routeParams, $location, ExamenServices){	 
 
    $scope.messages = $message.all;

  $scope.send = function(message){
    $message.create(message);
  };
}]);