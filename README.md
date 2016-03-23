# ui-notifications
Angular.js service to work with user notifications.

### What for

Angular.js service, which may efficiency significantly facilitate a process of managing UI notifications.
Actually you may use one of the following message types: 
<ul>
<li> - success </li>
<li> - error </li>
<li> - info </li>
<li> - warning </li>
</ul>

### How does it work

```javascript
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
```