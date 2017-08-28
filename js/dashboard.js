var topNavbarButton = $(".button-top-navbar");
var sideNavbar = $(".side-navbar");
var userMenu = $(".userMenu");
var logoutDOM = document.getElementById("logout-top-navbar");
var todoDOM = document.getElementById("todo-list");
var newsDOM = document.getElementById("news-list");
var visibleSidebar = false;

logoutDOM.innerHTML = loggedUser;

var id = parseInt(window.location.hash.substring(1));
findUser(id);
var userMenuButton = "<button onclick='openUserMenu()'><i class='fa fa-caret-down'></i></button>"
logoutDOM.innerHTML = loggedUser.firstName + " " + loggedUser.lastName + userMenuButton;

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

todoList.forEach(function(task){
  todoDOM.innerHTML += "<li>" + task.description + "</li>";
});

news.forEach(function(nw){
  var href = nw.link;
  newsDOM.innerHTML += "<li><a href='" + href + "'>" + nw.title + "</a></li>";
});

var openUserMenu = function(){
  userMenu.toggle("slow");
}

var openSubCat = function(menu){
  $("#"+menu).toggle("fast");
}
