app.factory('ExamenServices', ['$http', '$message', function($http, $firebaseArray) {

  var ref = new Firebase('https://chat506.firebaseio.com');
  var messages = $firebaseArray(ref.child('messages'));

  var create = function(message){
    return messages.$add(message);
  };
  var get = function(messageId){
    return $firebaseObject( ref.child('messages').child(messageId) );
  };
  var eliminate = function(message){
    return messages.$remove(message);
  };
  // var messages = [
  //   {'name': 'Pedro', 'text': 'Hola'},
  //   {'name': 'Maria', 'text': 'Qué tal?'},
  //   {'name': 'Pedro', 'text': '¿Bien?'},
  //   {'name': 'Maria', 'text': 'Todo bien por dicha...'}
  // ];  

  return {
    all: messages,
    create: create,
    get: get,
    eliminate: eliminate
  };
}]);

//-------------