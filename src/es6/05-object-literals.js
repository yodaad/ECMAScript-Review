// Enhanced object literals
function newUSer(user, age, country, uID) {
  return {
    user,
    age,
    country,
    id: uID,
  };
}

console.log(newUSer("yodaad", 30, "CO", 001));
