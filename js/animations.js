/* SUPPORT FUNCTIONS */

/* Animate login-box for wrong pass or user */
var errorAnimation = function(){
  $(".login-box").ready(function(){
    login_box.animate({
      left: "+=5px"
    }, 100);
    login_box.animate({
      left: "-=10px"
    }, 100);
    login_box.animate({
      left: "+=10px"
    }, 100);
    login_box.animate({
      left: "-=5px"
    }, 100);
  });
}

/* Make sidebar fit all screen (mobile only) */
var animateSideBar = function(func) {
  sideNavbar.toggle("slow");
}

var getUsernameBttn = function() {
  var id = parseInt(window.location.hash.substring(1));
  findUser(id);
  var userMenuButton = "<i class='fa fa-caret-down'></i>"
  logoutDOM.innerHTML = loggedUser.firstName + " " + loggedUser.lastName + " " + userMenuButton;
}

var onSmallScreen = function() {
  if(window.innerWidth < 500) {
    sideNavbar.css("width", "100vw");
    return true;
  }
  else {
    sideNavbar.css("width", "30vw");
    return false;
  }
}

var hasSideNavBar = function() {
  if(onSmallScreen()) {
    topNavbarButton.show();
    sideNavbar.hide();
    sideNavbar.css("position", "absolute");
  } else {
    topNavbarButton.hide();
    sideNavbar.show();
    sideNavbar.css("position", "inherit");
  }
}

var showSidebar = function(){
  animateSideBar();
}
