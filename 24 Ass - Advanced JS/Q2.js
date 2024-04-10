// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method to greet the person
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Employee constructor inheriting from Person
function Employee(name, age, designation) {
    // Call the Person constructor to set name and age
    Person.call(this, name, age);
    this.designation = designation;
}

// Inherit Person prototype methods
Employee.prototype = Object.create(Person.prototype);

// Add method to get employee details
Employee.prototype.getDetails = function() {
    console.log("Name: " + this.name + ", Age: " + this.age + ", Designation: " + this.designation);
};

// Create a new Employee object
var employee1 = new Employee("Alice", 25, "Software Engineer");

// Greeting and displaying employee details
employee1.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
employee1.getDetails(); // Output: Name: Alice, Age: 25, Designation: Software Engineer
