/*
    Primitive Data types
    - Numbers
    - Strings
    - Booleans
*/

/*
    Fundamentals
    - If statements
    - Loops (for, while)
    - Functions
*/


/* ARRAYS */

let myFirstArray = [];
myFirstArray.push(3);
myFirstArray.push(4);
myFirstArray.push("Beng");
myFirstArray.push(true);
myFirstArray.push(7);
// prints [3, 4, "Beng", true, 7]
// console.log(myFirstArray);

let poppedValue = myFirstArray.pop();
// prints 4
// console.log(myFirstArray.length);

// prints 7
// console.log(poppedValue);

for (let i = 0; i < myFirstArray.length; i++) {
    // console.log("i", i);
    let value = myFirstArray[i];
    // console.log("value", value);
}

for (let value of myFirstArray) {
    // console.log(value);
}


/* SETS */

let myFirstSet = new Set();
myFirstSet.add(3);
myFirstSet.add(4);
myFirstSet.add("Beng");
myFirstSet.add(true);
myFirstSet.add(3);
// prints Set{3, 4, "Beng", true}
// console.log(myFirstSet);

let hasValue = myFirstSet.has(7);
// prints false
// console.log(hasValue);

myFirstSet.delete("Beng");
// prints Set{3, 4, true}
// console.log(myFirstSet);

for (let value of myFirstSet) {
    // console.log(value);
}


/* MAPS */

let myFirstMap = new Map();
myFirstMap.set("red", 1);
myFirstMap.set("blue", 7);
// prints Map{"red"=>1, "blue"=>7}
// console.log(myFirstMap);

myFirstMap.set("blue", 12);
myFirstMap.set("green", 24);
// prints Map{"red"=>1, "blue"=>12, "green"=>24}
// console.log(myFirstMap);

myFirstMap.delete("red");
// prints Map{"blue"=>12, "green"=>24}
// console.log(myFirstMap);

let hasKey = myFirstMap.has("red")
// prints false
// console.log(hasKey);

for (let key of myFirstMap.keys()) {
    // console.log("key", key);
    let value = myFirstMap.get(key);
    // console.log("value", value);
}


/* OBJECTS */

let myFirstObject = {};
myFirstObject.name = "Beng";
myFirstObject.age = 25;

// prints {name: "Beng", age: 25}
// console.log(myFirstObject);

// prints "Beng"
// console.log(myFirstObject.name);

// prints undefined
// console.log(myFirstObject.height);

delete myFirstObject.age;
// prints {name: "Beng"}
// console.log(myFirstObject);

myFirstObject['height'] = 90;
// prints {name: "Beng", height: 90}
// console.log(myFirstObject['height']);

if ("height" in myFirstObject) {
    // console.log("I have this!");
}

for (let property in myFirstObject) {
    // console.log("property", property);
    let value = myFirstObject[property];
    // console.log("value", value);
}


/* CLASSES */

// Class Definition
class Person {
    constructor(name, age) {
        // Properties
        this.name = name;
        this.age = age;
    }

    // Methods

    sayHello() {
        console.log("Hi!");
    }

    sayHelloToSomeone(person) {
        console.log(this.name + " says hello to " + person.name);
    }

    introduce() {
        console.log("My name is " + this.name);
    }
}

// Instance of class Person
let myFirstPerson = new Person("Beng", 25);

// prints Person{name: "Beng", age: 25}
// console.log(myFirstPerson.name);

let mySecondPerson = new Person("John", 31);

// prints Person{name: "John", age: 31}
// console.log(mySecondPerson.age);

// prints "Hi!"
mySecondPerson.sayHello();

// prints "John says hello to Beng"
mySecondPerson.sayHelloToSomeone(myFirstPerson);

// prints "My name is Beng"
myFirstPerson.introduce();

// prints "My name is John"
mySecondPerson.introduce();