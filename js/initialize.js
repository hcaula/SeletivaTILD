/* Initializing global variables */
var body;
var logo;
var division;
var login_box;
var errorJQ;
var topNavbarButton;
var sideNavbar;
var userMenu;
var logoutDOM;
var visibleSidebar;
var sideNavbar;
var todoDOM;
var newsDOM;
var curPage;
var addCom;
var removeCom;
var searchCom;
var listCom;
var staticEmail;

/*
 * Initialize page function: sets the needed variables
 * and execute commands that should run as the page is
 * loaded.
*/
var initialize = function(page){
  switch (page) {
    case 'login':
      initializeLogin();
      break;
    case 'dashboard':
      initializeDashboard();
      break;
    case 'companies':
      initializeCompanies();
      break;
    case 'editUser':
      initializeEditUser();
      break;
  }
}

/* INITIALIZE FUNCTIONS */

var initializeLogin = function(){

  /* Setting used variables */
  body = document.getElementById("body");
  logo = $(".logo");
  division = $(".division");
  login_box = $(".login-box");
  errorJQ = $(".error");
  $("body").hide();


  /*
   * For better visualization, do intial things only when
   * the background image fully loads
  */

  /* By default, division line is hidden */
  division.hide();

  body.onload = function(){

    $("body").show();

    /*
     * Set inner HTML of the division line to none
     * just so there is some text on the HTML source
    */
    document.getElementById("division").innerHTML = "";

    /* Hiding the div that displays the error message */
    errorJQ.hide();

    /* Show division line if window is large enough */
    if(window.innerWidth >= 906) division.show();


    /* Initially hiding elements for animation. */
    logo.hide();
    login_box.hide();

    /* Logo, login frame and division line animations */
    logo.fadeIn(1000, function(){});
    login_box.toggle(1000);
    division.animate({
      height: "50%"
    }, 1000);
  };

  /*
   * Everytime the window is resized, check if
   * the division can or cannot be there.
  */
  $(window).resize(function() {
    if(window.innerWidth < 906) division.hide();
    else if (!focused) division.show();
  });

  /* When clicked on email field, make it the
   * only frame on page and center it
   */
  var focused = false;
  $("input[type=email]").focus(function() {
    if(!focused && division.is(":visible")){
      logo.toggle("slow");
      division.toggle("slow");
      focused = true;
    }
  });
}

var initializeDashboard = function() {
  /* Getting the navbar and sidebar */
  initializeNavbar();
  initializeSidebar();

  /* Setting the variables */
  todoDOM = document.getElementById("todo-list");
  newsDOM = document.getElementById("news-list");
  curPage = 'dashboard-content';

  /* TEMPORARY FOR COMPANIES PAGE TESTS */
  $(".companies-content").hide();

  /* Getting the content for the to do and news lists */
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
    s += "<div class='task-time'>" + nw.time.toUTCString() + "</div>";
    s += "</li>";
    newsDOM.innerHTML += s;
  });
}

var initializeNavbar = function() {
  topNavbarButton = $(".button-top-navbar");
  userMenu = $(".userMenu");
  logoutDOM = document.getElementById("logout-top-navbar-button");
  getUsernameBttn();
}

var initializeSidebar = function() {
  visibleSidebar = false;
  sideNavbar = $(".side-navbar");
  putSideNavBar();
  $(window).resize(putSideNavBar);
}

var initializeCompanies = function(){
  addCom = $("#expand-add");
  removeCom = $("#expand-remove");
  searchCom = $("#expand-search");
  listCom = $("#expand-list");

  addCom.hide();
  removeCom.hide();
  searchCom.hide();
  listCom.hide();
}

var initializeEditUser = function(){
  staticEmail = document.getElementById('userEmail');
  initializeNavbar();

  staticEmail.innerHTML = "<b>"+loggedUser.email+"</b>";
}

/* end of initialize functions */
