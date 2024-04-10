// Base class Shape
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

// Subclass Circle
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

// Demonstrating polymorphism
const shape1 = new Circle();
const shape2 = new Rectangle();

shape1.draw(); // Output: Drawing a circle
shape2.draw(); // Output: Drawing a rectangle
