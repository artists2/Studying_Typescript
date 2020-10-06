"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return "Hello, " + this.name;
    }
}
const person = new Person("r00t0k");
console.log(person.sayHello());
