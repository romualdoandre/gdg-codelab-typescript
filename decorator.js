var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Greeter(target) {
    target.prototype.greet = function () {
        console.log('Hello!');
    };
}
var Greeting = (function () {
    function Greeting() {
        // Implementation goes here...
    }
    Greeting = __decorate([
        Greeter
    ], Greeting);
    return Greeting;
}());
var myGreeting = new Greeting();
myGreeting.greet(); // console will output 'Hello!'
function f() {
    console.log("f(): evaluated");
    return function (target, key, descriptor) {
        console.log(key + " called in f");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, key, descriptor) {
        console.log(key + " called in g");
    };
}
var C = (function () {
    function C() {
    }
    C.prototype.method = function () { console.log("Hello"); };
    __decorate([
        f(),
        g()
    ], C.prototype, "method", null);
    return C;
}());
new C().method();
//# sourceMappingURL=decorator.js.map