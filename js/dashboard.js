var topNavbarButton = $(".button-top-navbar");
var sideNavbar = $(".side-navbar");

var onSmallScreen = function() {
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

var visibleSidebar = false;
var showSidebar = function(){
  if(!visibleSidebar) {
    sideNavbar.show();
    visibleSidebar = true;
  }
  else {
    sideNavbar.hide();
    visibleSidebar = false;
  }

}

$(window).resize(hasSideNavBar);
