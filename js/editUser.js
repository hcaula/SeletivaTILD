var logoutDOM = document.getElementById("logout-top-navbar-button");
var userMenu = $(".userMenu");

var id = parseInt(window.location.hash.substring(1));
findUser(id);
var userMenuButton = "<i class='fa fa-caret-down'></i>"
logoutDOM.innerHTML = loggedUser.firstName + " " + loggedUser.lastName + " " + userMenuButton;

var openUserMenu = function(){
  userMenu.toggle("slow");
}

var getEditUserLink = function(){
  window.location = "./editUser.html#"+loggedUser.id.toString();
  location.reload();
}

var getDashboardLink = function(){
  window.location = "./dashboard.html#"+loggedUser.id.toString();
}
