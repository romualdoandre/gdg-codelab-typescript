interface Thing{
    a: number;
    b: string;
    c?: boolean;
    foo:{
        (s: string): string;
        (n: number): number;
        data: any;
    };
    new (s: string): Element;
    [index:number]: Date;
}

function doSomething(x: Thing){
    x.foo.data;
    return x.a;
}
function sayHello(name: string=' World',greeting?: string): string {
    if (!greeting) {
    greeting = 'Hello';
    }
    return greeting+', ' + name;
}

function greetPeople(greeting: string, ...names: string[]): string {
    return greeting + ', ' + names.join(' and ') + '!';
}

var itens: Array<string>;

//var n=doSomething({a:10,b:"hello"});