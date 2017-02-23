app.controller('LoginController', function (UserFactory, $scope){
  $scope.user = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }

  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.login = function(){
    console.log($scope.user);
    UserFactory.login($scope.user, gotLoggedIn)
  }
});
