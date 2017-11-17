angular.module("myApp").factory("UserFactory", UserFactory);

function UserFactory(){
  
  var _currentUser = { val: ''} 
  var _loggedIn = {val: false }
  
  function setCurrentUser(user){
    _currentUser.val = user;
    _loggedIn.val = true;
  }
  function getCurrentUser(){
    return _currentUser;
  }
  function getLoggedIn(){
    return _loggedIn;
  }
  return{
    setCurrentUser: setCurrentUser,
    getCurrentUser: getCurrentUser,
    getLoggedIn: getLoggedIn
  };
}
