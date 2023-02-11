// Before ES6
function newUser(name, age, country) {
  var name = name || "Diego";
  var age = age || 34;
  var country = country || "CO";
  console.log(name, age, country);
}

newUser();
newUser("David", 15, "MX");

// After ES6
function newAdmin(name = "Andrés", age = 34, country = "CL") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "PE");
