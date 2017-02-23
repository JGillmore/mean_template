app.factory("UserFactory", function ($http, $location) {

   var loggedIn = {};
   var factory = {};

   factory.getLoggedIn = function(callback){
     if (loggedIn.name){
       $location.path('/home')
     }else{
       callback(loggedIn);
     }
   }
   factory.login = function(loginInfo, callback){
     console.log("factory login info", loginInfo);
     $http.post('/login', loginInfo).then(function(data){
       loggedIn = data.data
       console.log("loggedIn = ",loggedIn);
       if (loggedIn.name){
         $location.path('/home')
       }else{
         callback(loggedIn);
       }
     })
   }

   return factory;

});
