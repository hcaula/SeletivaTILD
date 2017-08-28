var emailField = document.getElementById("email");
var passField = document.getElementById("password");
var errorDOC = document.getElementById("error");
var errorJQ = $(".error");
var errorMessage;

errorJQ.hide();

var login = function(){
  var email = emailField.value;
  var pass = passField.value;
  var userFound = false;
  var passCheck = false;

  var user;
  for(var i = 0; !userFound && i < users.length; i++) {
    user = users[i];
    if(user.email == email) {
      userFound = true;
      if(user.password == pass) passCheck = true;
      else passCheck = false;
    }
  }

  loggedUser = user;
  if(!userFound) errorMessage = "Usuário não encontrado.";
  else {
    if(!passCheck) errorMessage = "Senha incorreta.";
    else {
      window.location = "./subseq/dashboard.html#" + loggedUser.id;
    }
  }

  if(errorMessage) {
    errorJQ.show();
    errorDOC.innerHTML = '<i class="fa fa-exclamation-circle"></i>' + errorMessage;
    errorAnimation();
  }

}
