let person1 = {
    name: 'Paul',
    greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
 }
};

let person2 = {
    name: 'Jessica', 
    greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
} 
};

let person3 = {
    name: 'Brooke', 
    greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
} 
};

let person4 = {
    name: 'Stephanie',
    greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
} 
};

let person5 = {
    name: 'Casey', 
    greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
} 
};
person1.greet();
person2.greet();
person3.greet();
person4.greet();
person5.greet();

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.city = city; 
        this.age = age; 
    }

sayHello() {
    console.log(`Hey! My name is ${this.name} and I am ${this.age} years old.  I am from ${this.city}.`);
}
}
let p1 = new Person('Paul', 40, 'Montgomery');
let p2 = new Person('Jessica', 32, 'Biringham');
p1.sayHello();
p2.sayHello();

function Persons(name, age, city){
    this.name = name; 
    this.age = age; 
    this.city = city;
}
Persons.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name} and I am ${this.age}.  I am from ${this.city}`);

}
let p3 = new Persons('Brooke', 27, 'Grove Hill'); 
let p4 = new Persons('Stephanie', 40, 'Thomasville');
p3.sayHello();
p4.sayHello();
