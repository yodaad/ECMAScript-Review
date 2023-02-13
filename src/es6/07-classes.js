// Class declaration

class User {}

// Class instantiation
// const newUser = new User();

class user {
  // Methods
  greeting() {
    return "Hello";
  }
}

const xyz = new user();
console.log(xyz.greeting());
const newloper = new user();
console.log(newloper.greeting());

// Constructor
class user {
  // Constructor
  constructor() {
    console.log("New user");
  }
  greeting() {
    return "Hello";
  }
}

const david = new user();

// This --> makes reference to the parent element that contains it
class user {
  constructor(name) {
    this.name = name;
  }
  // Methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const diego = new user("Diego");
console.log(diego.greeting());

// Setters & Getters
class user {
  //  Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }

  set uAge(n) {
    this.age = n;
  }
}

const john = new user("John", 32);
console.log(john.uAge);
console.log((john.uAge = 20));
