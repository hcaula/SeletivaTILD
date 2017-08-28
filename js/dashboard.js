var topNavbarButton = $(".button-top-navbar");
var sideNavbar = $(".side-navbar");
var visibleSidebar = false;

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
  } else {
    topNavbarButton.hide();
    sideNavbar.show();
  }
}

hasSideNavBar();

var showSidebar = function(){
  animateSideBar();
}

$(window).resize(hasSideNavBar);
