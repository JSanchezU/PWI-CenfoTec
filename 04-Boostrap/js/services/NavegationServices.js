app.factory('NavegationServices', ['$http','$localStorage', '$location', function($http, $localStorage, $location) {

	var servicesDefinitions = {

     
    getProducts : function() {

      return $http({
        url: 'https://apppracticau.firebaseio.com/products.json',
        method: 'GET'
        })
          .success(function(data) { 
              return data;  
              console.log("funciona");
            }) 
            .error(function(err) { 
              //return err; 
              console.log(err)
            });
    }
    }

    return servicesDefinitions;

}]);

//-------------