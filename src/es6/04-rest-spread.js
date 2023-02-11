// Arrays destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring
let user = {
  username: "Diego",
  age: 39,
};

let { username, age } = user;
console.log(username, age);

// Spread Operator
let person = {
  name: "Diego",
  age: 18,
};
let country = "CO";

let data = { id: 1, ...person, country };
console.log(data);

// Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 7, 8, 9);
