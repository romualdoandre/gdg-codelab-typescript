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

//var n=doSomething({a:10,b:"hello"});