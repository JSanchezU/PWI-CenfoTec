var factories = angular.module('chatApp.factories', ['firebase']);

factories.factory('$message', function($firebaseArray){
	var ref = new Firebase('https://chat506.firebaseio.com');
	var messages = $firebaseArray(ref.child('messages'));

	var create = function(message){
		return messages.$add(message);
	};
	var get = function(messageId){
		return $firebaseObject$firebaseObject(ref.child('messages').child(messageId));
	};
	var eliminate = function(message){
		return messages.$remove(message);
	};




	//var messages = [
	//	{'name': 'Fulano', 'text', 'Hola'},
	//	{'name': 'Mengano', 'text', 'Que tal?'},
	//	{'name': 'Fulano', 'text', '¿Bien?'},
	//	{'name': 'Mengano', 'text', 'Todo bien por dicha'}
	//];

	return {
		all: messages,
		create: create,
		get: get,
		eliminate: eliminate
	};
});