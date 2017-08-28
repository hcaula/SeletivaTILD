var topNavbarButton = $(".button-top-navbar");
var sideNavbar = $(".side-navbar");
var logoutDOM = document.getElementById("logout-top-navbar");
var visibleSidebar = false;

logoutDOM.innerHTML = loggedUser;

var id = parseInt(window.location.hash.substring(1));
findUser(id);
logoutDOM.innerHTML = loggedUser.firstName + " " + loggedUser.lastName;

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

hasSideNavBar();

var showSidebar = function(){
  animateSideBar();
}

$(window).resize(hasSideNavBar);
