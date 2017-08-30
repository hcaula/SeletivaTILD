/* Setting variables */
var emailField = document.getElementById("email");
var passField = document.getElementById("password");
var errorDOC = document.getElementById("error");
var errorJQ = $(".error");
var errorMessage;


/* Hiding the div that displays the error message */
errorJQ.hide();

/* Assert if the user and password are valid */
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

  if(!userFound) errorMessage = "Usuário não encontrado.";
  else if(!passCheck) errorMessage = "Senha incorreta.";
  else {
    window.location = "./subseq/dashboard.html#" + user.id;

    // Reseting error message so it doesn't display
    // once the email and password are correct
    errorMessage = '';
  }

  if(errorMessage) {
    errorJQ.show();
    errorDOC.innerHTML = '<i class="fa fa-exclamation-circle"></i>' + errorMessage;
    errorAnimation();
  }

}
