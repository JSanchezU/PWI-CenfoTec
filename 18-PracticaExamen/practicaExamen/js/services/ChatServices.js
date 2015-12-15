var factories = angular.module('chatApp.factories');

factories.factory('$message', [function($firebase){
  var ref = new Firebase('');
  var messages = $firebase(ref.child('messages')).$asArray()

  var create = function (message){
    return messages.$add(message);
  };
  var get = function (messageId){
    return $firebase( ref.child('messages').child(messageId)).$asObject();
  };
  var delete = function (message){
    return messages.$remove(message);
  };

  var messages = [
    {'name': 'Pedro', 'text': 'que mae?'},
    {'name': 'Jose', 'text': 'todo bn!'},
    {'name': 'Pedro', 'text': 'WoW'},
    {'name': 'Jose', 'text': 'dele'},
    {'name': 'Pedro', 'text': 'Skype!'},
  ];

  return {
    all: messages
  }
}]);

