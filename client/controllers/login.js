app.controller('LoginController', function (UserFactory, $scope){
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }

  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.login = function(){
    UserFactory.login(gotLoggedIn)
  }
});
