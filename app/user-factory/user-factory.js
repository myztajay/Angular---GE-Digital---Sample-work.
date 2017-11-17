angular.module("myApp").factory("UserFactory", UserFactory);

function UserFactory(){
  var _currentUser = '';
  var _loggedIn = false ;
  return{
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser,
    loggedIn: loggedIn,
  };
  
  function setCurrentUser(user){
        _currentUser = user;
        _loggedIn = true;
  }
  function getCurrentUser(){
    return _currentUser;
  }
  function loggedIn(){
    return _loggedIn;
  }
}
