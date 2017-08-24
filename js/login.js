var emailField = document.getElementById("email");
var passField = document.getElementById("password");
var wrongPass = document.getElementById("wrongPass");
var userNotFound = document.getElementById("userNotFound");

var login = function(){
  var email = emailField.value;
  var pass = passField.value;
  users.forEach(function(user){
    if(user.email == email) {
      if(user.password == pass) {
        window.location = "./dashboard.html";
        return;
      }
      else wrongPass.hidden = false;
    }
  });
  userNotFound.hidden = false;
}
