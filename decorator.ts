function Greeter(target: Function): void {
    target.prototype.greet = function(): void {
        console.log('Hello!');
    }
}
@Greeter
class Greeting {
    constructor() {
    // Implementation goes here...
    }
}
var myGreeting = new Greeting();
myGreeting.greet(); // console will output 'Hello!'
function f() {
    console.log("f(): evaluated");
    return function (target, key: string, descriptor: PropertyDescriptor) {
        console.log(`${key} called in f`);
    }
}
function g() {
    console.log("g(): evaluated");
    return function (target, key: string, descriptor: PropertyDescriptor) {
        console.log(`${key} called in g`);
    }
}


class C {
    @f()
    @g()
    method() { console.log("Hello")}
}

new C().method()