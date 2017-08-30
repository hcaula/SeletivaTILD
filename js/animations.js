/* Initializing globar variables */
var body;
var logo;
var division;
var login_box;

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
  }
}

/* INITIALIZE FUNCTIONS */

var initializeLogin = function(){

  /* Setting used variables */
  body = document.getElementById("body");
  logo = $(".logo");
  division = $(".division");
  login_box = $(".login-box");


  /*
   * For better visualization, do intial things only when
   * the background image fully loads
  */
  body.onload = function(){

    /*
     * Set inner HTML of the division line to none
     * just so there is some text on the HTML source
    */
    document.getElementById("division").innerHTML = "";

    /* If the window is small, don't display the division line */
    if(window.innerWidth < 906) division.hide();
    else division.show();

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

/* end of initialize functions */


/* SUPPORT FUNCTIONS */

/* Animate login-box for wrong pass or user */
var errorAnimation = function(){
  var times = 4;
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
}

/* Make sidebar fit all screen (mobile only) */
var animateSideBar = function(func) {
  sideNavbar.toggle("slow");
}
