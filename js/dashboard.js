var topNavbarButton = $(".button-top-navbar");
var sideNavbar = $(".side-navbar");

var onSmallScreen = function() {
  console.log(window.innerWidth);
  if(window.innerWidth < 500) return true;
  else return false;
}

var hasSideNavBar = function() {
  if(onSmallScreen()) {
    topNavbarButton.show();
    sideNavbar.hide();
  } else {
    topNavbarButton.hide();
    sideNavbar.show();
  }
}

hasSideNavBar();

$(window).resize(hasSideNavBar);
