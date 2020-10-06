class Person {
    private name: string;

    constructor(name: string) { //생성자
        this.name = name;
    }

    sayHello() {
        return "Hello, " + this.name;
    }
}


const person = new Person("r00t0k");

console.log(person.sayHello());