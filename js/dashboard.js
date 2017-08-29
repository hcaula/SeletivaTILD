var topNavbarButton = $(".button-top-navbar");
var sideNavbar = $(".side-navbar");
var userMenu = $(".userMenu");
var logoutDOM = document.getElementById("logout-top-navbar-button");
var todoDOM = document.getElementById("todo-list");
var newsDOM = document.getElementById("news-list");
var visibleSidebar = false;

logoutDOM.innerHTML = loggedUser;

var id = parseInt(window.location.hash.substring(1));
findUser(id);
var userMenuButton = "<i class='fa fa-caret-down'></i>"
logoutDOM.innerHTML = loggedUser.firstName + " " + loggedUser.lastName + " " + userMenuButton;

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

todoList.forEach(function(task, i){
  var s;
  if (i%2==0) s = "<li class='li-even'>";
  else s = "<li class='li-odd'>";
  s += "<div class='task-title'>" + task.description + "</div>";
  s += "<div class='task-local'>" + task.local + "</div>";
  s += "<div class='task-time'>" + task.time.toUTCString() + "</div>";
  s += "</li>";
  todoDOM.innerHTML += s;
});

news.forEach(function(nw, i){
  var href = nw.link;
  var s;
  if (i%2==0) s = "<li class='li-even'>";
  else s = "<li class='li-odd'>";
  s += "<div class='task-title'><a href='" + href + "'>" + nw.title + "</a></div>"
  s += "</li>";
  newsDOM.innerHTML += s;
});

var openUserMenu = function(){
  userMenu.toggle("slow");
}

var openSubCat = function(menu){
  $("#"+menu).toggle("fast");
}
