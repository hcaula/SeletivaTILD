var push = $(".push-content");
var title = document.getElementById("title");
var oriTitle = title.innerHTML;
var curTitle = oriTitle;

/* This message is changeble */
var pushMessage = "Almoço com Toshiba";

/* Change the page title on the browser navbar when push arrives */
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

/* Function responsable for setting the push notification */
var appearPush = function(){
  push.toggle('slow');
  var audio = new Audio('../assets/sounds/notification.mp3');
  audio.volume = 0.3;
  audio.play();
  setInterval(function(){changeTitle()}, 2000);
}

setInterval(appearPush, 60000);

/* Function called when user closes the notification box */
var closePush = function() {
  push.toggle('slow');
  document.title = oriTitle;
  clearInterval(changeTitle);
}
