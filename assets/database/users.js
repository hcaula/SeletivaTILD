var loggedUser = {};
var users = [
  {
    id: 1,
    email: "admin@org.com",
    password: "123Pass",
    firstName: "Admin",
    lastName: "admin",
    phone: "555-8181"
  },
  {
    id: 2,
    email: "henrique.caula@hotmail.com",
    password: "pass",
    firstName: "Henrique",
    lastName: "Caúla",
    phone: "+55 81 9.9999-9709"
  }
]

var findUser = function(id){
  users.forEach(function(user){
    if(user.id === id) {
      loggedUser = user;
    }
    else return "User not found.";
  });
}
