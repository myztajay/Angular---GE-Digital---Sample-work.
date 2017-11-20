angular.module("myApp")
  .controller('NavCtrl', NavCtrl)
  .directive("navDirective", navDirective);

function navDirective(){
  return {
    templateUrl: 'nav-directive/nav.html',
    controller: 'NavCtrl'
  }
}

function NavCtrl ($scope, UserFactory) {
  $scope.log = UserFactory.getLoggedIn();
  $scope.apply
};

function Logout(UserFactory) {
  firebase.auth().signOut().then(function(){
  UserFactory.sessionReset();
  $window.location.href = '/#!/login';
  })
}