var todoDOM = document.getElementById("todo-list");
var newsDOM = document.getElementById("news-list");
var carret = $(".fa-caret-down");

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

var openUserMenu = function(){
  userMenu.toggle("slow");
}

var openSubCat = function(menu){
  $("#"+menu).toggle("fast");
}

var getDashboardLink = function(){
  window.location = "./dashboard.html#"+loggedUser.id.toString();
  location.reload();
}

var getEditUserLink = function(){
  window.location = "./editUser.html#"+loggedUser.id.toString();
}

curPage = 'dashboard-content'
var toggleBetween = function(change){
  if(curPage != change){
    $('.'+curPage).fadeOut('fast', function(){
      $('.'+change).fadeIn('fast');
    });
  }
}
