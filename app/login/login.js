'use strict';

angular.module('myApp.login', ['ngRoute',])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', [ '$scope', '$firebaseArray', '$window', 'UserFactory', function($scope, $firebaseArray, $window, UserFactory) {
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
  
  $scope.loginFormShow = true;
  $scope.signUpFormShow = false;
  $scope.error = "";
  
  $scope.toSignUp = function(){
    $scope.loginFormShow = false;
    $scope.signUpFormShow = true;
  };
  $scope.toLogin = function(){
    $scope.loginFormShow = true;
    $scope.signUpFormShow = false;
  };
  
  $scope.signUp = function(){
    if($scope.password != $scope.passwordConfirmation){
      $scope.error = "Your passwords need to match.";
      return;
    }
    firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
    .catch(function(res){
      $scope.error = res.message;
      $scope.$apply();
    })
    .then(function(res){
      $scope.loginFormShow = true;
      $scope.signUpFormShow = false;
    });
  };
  
  $scope.login = function(){
    firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password)
    .catch(function(res){
      $scope.error = res.message;
      $scope.$apply();
    })
    .then(function(user){
      console.log(user);
      UserFactory.setCurrentUser(user)
      $window.location.href = '/#!/contacts';
    });
  }
}]);

