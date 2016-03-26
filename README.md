## UI-Notifications on Angular.js

### Demo

<a href="http://asduser.github.io/examples/ui-notifications/index.html"><b>Open demo page</b></a>

### Description

Angular.js service, which may significantly facilitate a process of managing UI notifications.
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

### Dependencies

This service uses a jQuery notification plugin "<i>lobibox</i>". Be sure, that it was injected into your main project.
