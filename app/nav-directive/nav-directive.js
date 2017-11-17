angular.module("myApp")
  .controller('NavCtrl', NavCtrl)
  .directive("navDirective", navDirective);

function navDirective(){
  console.log('from nav directive');
  return {
    templateUrl: 'nav-directive/nav.html',
    controller: 'NavCtrl'
  }
}

function NavCtrl ($scope, UserFactory) {
  console.log('from nav controller');
  $scope.log = UserFactory.getLoggedIn();
  $scope.apply
};

