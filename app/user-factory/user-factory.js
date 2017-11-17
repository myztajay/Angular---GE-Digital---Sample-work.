angular.module("myApp").factory("UserFactory", UserFactory);

function UserFactory(){
  var currentUser = '';
  var loggedIn = false;
  return{
    setCurrentUser: setCurrentUser,
    currentUser: currentUser,
    loggedIn: loggedIn
  };
  
  function setCurrentUser(user){
        currentUser = user;
        loggedIn = true;
  }
}
