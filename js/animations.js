/* Setting variables for easier reading later. */
var body;
var logo;
var division;
var login_box;


var initialize = function(page){
  if (page == 'login') initializeLoginPage();
}

var initializeLoginPage = function(){
  body = document.getElementById("body");
  logo = $(".logo");
  division = $(".division");
  login_box = $(".login-box");

  /*
   * Set inner HTML of the division line to none
   * just so there is some text on the HTML source.
  */
  document.getElementById("division").innerHTML = "";

  /* If the window is small, don't display the division line. */
  if(window.innerWidth < 906) division.hide();
  else division.show();

  /* Initially hiding elements for animation. */
  logo.hide();
  login_box.hide();

  /* As the background image loads, animate. */
  body.onload = function(){
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
}

/* When clicked on input, make it the only window */
var focused = false;
$("input[type=email]").focus(function() {
  if(!focused && division.is(":visible")){
    logo.toggle("slow");
    division.toggle("slow");
    focused = true;
  }
});

var togg = function(){
  $(".login").toggle("Slow");
}

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

var animateSideBar = function(func) {
  sideNavbar.toggle("slow");
}
