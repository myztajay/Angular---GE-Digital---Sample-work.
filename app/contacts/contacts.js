'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', [ '$scope', function($scope) {
  
  // just for demo purpose this database reference will be replaces to an external private file
  if (!firebase.apps.length) {
    var config = {
    apiKey: "AIzaSyBIGGuU_CsX_wY_1SVye0KVW1EJj4Ha2Vc",
    authDomain: "contacts-angularfire.firebaseapp.com",
    databaseURL: "https://contacts-angularfire.firebaseio.com",
    projectId: "contacts-angularfire",
    storageBucket: "contacts-angularfire.appspot.com",
    messagingSenderId: "470332230879"
    };
    firebase.initializeApp(config);
  }
  var ref = firebase.database().ref().child('contactlist');
  // $scope.contacts = $
  $scope.addContact = function(){
    console.log("added");
    ref.push({
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone
    })
  }
}]);