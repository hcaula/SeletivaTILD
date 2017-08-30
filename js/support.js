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

/* Gets first and last name of logged user to put on the logout button */
var getUsernameBttn = function() {
  var id = parseInt(window.location.hash.substring(1));
  findUser(id);
  var userMenuButton = "<i class='fa fa-caret-down'></i>"
  logoutDOM.innerHTML = loggedUser.firstName + " " + loggedUser.lastName + " " + userMenuButton;
}


/* Verifies if user is on mobile (values colected via testing) */
var onSmallScreen = function() {
  if(window.innerWidth < 500) return true;
  else return false;
}

/* Asserts if page should have the sidebar or if it should be hidden */
var hasSideNavBar = function() {
  if(onSmallScreen()) {
    sideNavbar.css("width", "100vw");
    topNavbarButton.show();
    sideNavbar.hide();
    sideNavbar.css("position", "absolute");
  } else {
    sideNavbar.css("width", "30vw");
    topNavbarButton.hide();
    sideNavbar.show();
    sideNavbar.css("position", "inherit");
  }
}

/* Animates sidebar (mobile only) */
var showSidebar = function(){
  sideNavbar.toggle("slow");
}
