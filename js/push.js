var push = $(".push-content");
var title = document.getElementById("title");
var oriTitle = title.innerHTML;
var curTitle = oriTitle;

var pushMessage = "Almoço com Toshiba";

var changeTitle = function() {
  if (curTitle == oriTitle) {
    document.title = pushMessage;
    curTitle = pushMessage;
  }
  else {
    document.title = oriTitle;
    curTitle = oriTitle;
  }
}

var appearPush = function(){
  push.toggle('slow');
  var audio = new Audio('../assets/sounds/notification.mp3');
  audio.play();
  setInterval(changeTitle, 2000);
}

setInterval(appearPush, 60000);

var closePush = function() {
  push.toggle('slow');
  document.title = oriTitle;
  clearInterval(changeTitle);
}
