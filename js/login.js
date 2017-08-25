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

  for(var i = 0; !userFound && i < users.length; i++) {
    var user = users[i];
    if(user.email == email) {
      userFound = true;
      if(user.password == pass) passCheck = true;
      else passCheck = false;
    }
  }

  if(!userFound) errorMessage = "Usuário não encontrado.";
  else {
    if(!passCheck) errorMessage = "Senha incorreta.";
    else window.location = "./subseq/dashboard.html";
  }

  if(errorMessage) {
    errorJQ.show();
    errorDOC.innerHTML = '<i class="fa fa-exclamation-circle"></i>' + errorMessage;
    errorAnimation();
  }

}
