(function(){

    "use strict";

    angular
        .module("myApp", ["FE.utils"])
        .controller("myController", myController);

    function myController(uiNotifications){
        var vm = this;

        // Display 'error' popup.
        vm.openErrorPopup = function(){
            uiNotifications.popup("Enter your message here...");
        };

        // Display 'success' popup.
        vm.openSuccessPopup = function(){
            uiNotifications.popup("All is ok!", "success");
        };

        // Wait confirmation from user and if true invoke an appropriate function.
        vm.confirm = function(){
            uiNotifications.confirm(Greeting, "Do you want to run a 'Greeting' method?", {title: "Confirm your action!"} );
        };

        // Display a simple inform window. It will be closed automatically.
        vm.inform = function(){
            uiNotifications.inform();
        };

        function Greeting(){
            alert("Some actions after confirmation...");
        }

    }

    // IoC container.
    myController.$inject = [
        "utils.uiNotifications"
    ];

})();