(function () {
    'use strict';
    
    angular.module('lunchChecker', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.name = "";
      $scope.message = "";

      $scope.countFood = function(){
        var list = $scope.name;

        var listCount = (list.split(',')).length;
        $scope.showMessage(listCount);
      }

      $scope.showMessage = function(listcount){
          $scope.color = {"color":"green"};
        if (listcount > 4){
            $scope.message = "Too much!";
        }
        else if (listcount == 1 && $scope.name == ""){
            $scope.message = "Please enter data first"
            $scope.color = {"color":"red"};
        }
        else {
            $scope.message = "Enjoy!"
        }
      }
    }
     
          
    })();
    