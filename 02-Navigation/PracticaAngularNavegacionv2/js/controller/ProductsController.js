app.controller('ProductsController', ['$scope', '$routeParams', function($scope, $routeParams){	 
 	
 	$scope.products = [
 	{"name":"Coca Cola","price":"$3"},
 	{"name":"Red Bull","price":"$6"}]
        console.log($scope.products);

     $scope.add = function(){
     	var newproduct = $scope.newproduct;
     	$scope.products.push(newproduct);
     }

    /*NavegationServices.getProducts().success(function(data) {
    	console.log(data.appointment);

        $scope.products = data;
        console.log($scope.products);



    });*/
}]);