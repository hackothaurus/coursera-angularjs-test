(function(){ //EEFI
    'use strict';
    //this automatic binding is being done by AngularJS bw View and ViewModel

    //binding of the app and the controller
//controller is viewmodel or presentation logic
angular.module('myFirstApp', [])
.controller('MyFirstController', function ($scope){
    $scope.name = "Harram";
    $scope.sayHello = function(){
        return "Hello coursera";
    };
});

})();