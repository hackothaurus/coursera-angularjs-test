(function () {
    'use strict';

    
    angular.module('List', [])
    .controller('toBuyController', toBuyController)
    .controller("alreadyBoughtController", alreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    toBuyController.$inject = ['ShoppingListCheckOffService'];

    function toBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;
        toBuyCtrl.toBuy = ShoppingListCheckOffService.getToBuy();
        toBuyCtrl.count = ShoppingListCheckOffService.getCount();
        toBuyCtrl.valueSelected = function (string) {
        //increment length of count array, tracking the number of values selected in the first controller, as this determines the appearance of "all values selected" in this controller
        ShoppingListCheckOffService.incCount();
          
        //get the $event string to get the name and quantity of selected item
        var string1 = string.path[1].textContent
        var words = string1.split(' ');
        var nname = words[3];
        var quanitity = words[2];
       
        //push the new item in the other list
        ShoppingListCheckOffService.pushNewItem(nname, quanitity);
         
        //remove the item from the current list i.e. remove the entire <li> tag
        string.path[1].remove();

        //check Count to see if the message should change
        ShoppingListCheckOffService.checkCount();
      };
    }

 ////////
 ///////

    alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function alreadyBoughtController(ShoppingListCheckOffService){
      var alreadyBoughtCtrl = this;
      alreadyBoughtCtrl.count = ShoppingListCheckOffService.getCount();
      alreadyBoughtCtrl.alreadyBought = ShoppingListCheckOffService.getAlreadyBought();
    }

 ////////
 ////////

    function ShoppingListCheckOffService(){
      
      var service = this;
      var count = [];
      var alreadyBought = [];

      service.getAlreadyBought = function () {
        return alreadyBought;
      };
    
      var toBuy = [
        {
          name: "Milk",
          quantity: "2"
        },
        {
          name: "Donuts",
          quantity: "200"
        },
        {
          name: "Cookies",
          quantity: "300"
        },
        {
          name: "Chocolate",
          quantity: "5"
        },
        {
            name: "Bananas",
            quantity:"2"
        }
      ];
      service.getToBuy = function ()  {
        return toBuy;
          };

      service.pushNewItem = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        alreadyBought.push(item);
      };

      service.incCount = function(){
        console.log(count.length);
        count.push("1");
      }

      service.getCount = function(){
        return count;
      }
    }
    
})();
    