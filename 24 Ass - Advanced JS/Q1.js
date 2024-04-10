// Object constructor for Person


function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to greet the person

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Creating a new Person object

var person1 = new Person("John", 30);

// Greeting the person
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
