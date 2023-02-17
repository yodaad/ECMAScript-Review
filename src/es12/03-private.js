class user {
  //  Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Methods
  #speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }

  set #uAge(n) {
    this.age = n;
  }
}

const john = new user("John", 32);
console.log(john.uAge);
console.log((john.uAge = 20));
