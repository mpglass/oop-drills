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

function Persons(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
Persons.prototype.sayHello = function () {
    console.log(`Hello, I am ${this.name} and I am ${this.age}.  I am from ${this.city}`);

}
let p3 = new Persons('Brooke', 27, 'Grove Hill');
let p4 = new Persons('Stephanie', 40, 'Thomasville');
p3.sayHello();
p4.sayHello();


class Vehicle {
    constructor(type, manf, wheels, doors) {
        this.type = type
        this.manf = manf;
        this.wheels = wheels
        this.doors = doors
    }
    aboutVehicle() {
        console.log(`This is a ${this.type}, it was made by ${this.manf}, and it has ${this.wheels} wheels and ${this.doors} doors.`);
    }
}
class Truck extends Vehicle {
    constructor(type, manf, wheels, doors, bed) {
        super(type, manf, wheels, doors);
        this.bed = bed;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manf} truck.  It has ${this.wheels} wheels and ${this.doors} doors. It is ${this.bed} that it has a bed.`);
    }
}
class Sedan extends Vehicle {
    constructor(type, manf, wheels, doors, mpg) {
        super(type, manf, wheels, doors);
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manf} Sedan.  It has ${this.wheels} and ${this.doors} doors. And it is ${this.mpg}, that it gets good mpg.`)
    }
}
class Motorcycle extends Vehicle {
    constructor(type, manf, wheels, doors, handlebars, steeringWheel) {
        super(type, manf, wheels, doors);
        this.handlebars = handlebars;
        this.steeringWheel = steeringWheel;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manf} Motorcycle.  It has ${this.wheels} wheels and ${this.doors} doors. It is ${this.handlebars} that it has handlebars, but having a steering wheels is ${this.steeringWheel}.`)
    }
}
let v1 = new Vehicle('vehicle', 'Honda', 4, 4);
let t1 = new Truck('truck','Dodge', 4, 2, true);
let s1 = new Sedan('sedan', 'Toyota', 4, 4, true);
let m1 = new Motorcycle('motorcylce', 'Kawasaki', 2, 'no', true, false);

v1.aboutVehicle();
t1.aboutVehicle();
s1.aboutVehicle();
m1.aboutVehicle();