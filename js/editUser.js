var logoutDOM = document.getElementById("logout-top-navbar-button");
var userMenu = $(".userMenu");

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
