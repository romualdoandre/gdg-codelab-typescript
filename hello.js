function doSomething(x) {
    x.foo.data;
    return x.a;
}
function sayHello(name, greeting) {
    if (name === void 0) { name = ' World'; }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + name;
}
function greetPeople(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + ', ' + names.join(' and ') + '!';
}
var itens;
//var n=doSomething({a:10,b:"hello"}); 
