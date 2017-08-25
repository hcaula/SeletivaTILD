var body = document.getElementById("body");
var logo = $(".logo");
var division = $(".division");
var login_box = $(".login-box");

document.getElementById("division").innerHTML = "";

if(window.innerWidth < 906) division.hide();
else division.show();

logo.hide();
login_box.css("opacity", 0.0);

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

$( window ).resize(function() {
  if(window.innerWidth < 906) division.hide();
  else division.show();
});
