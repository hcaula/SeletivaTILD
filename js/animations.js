/* Setting variables for easier reading later. */
var body = document.getElementById("body");
var logo = $(".logo");
var division = $(".division");
var login_box = $(".login-box");


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
login_box.css("opacity", 0.0);

/* As the background image loads, animate. */
body.onload = function(){
  logo.fadeIn(1000, function(){
    login_box.animate({
      opacity: 1
    }, 1000);
  });
  division.animate({
    height: "50%"
  }, 2000);
}

/*
 * Everytime the window is resized, check if
 * the division can or cannot be there.
*/
$(window).resize(function() {
  if(window.innerWidth < 906) division.hide();
  else division.show();
});


/* Animate login-box for wrong pass or user */
errorAnimation = function(){
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
