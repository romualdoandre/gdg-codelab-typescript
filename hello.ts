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

function process(x: Thing){
    x.foo.data;
    return x.a;
}

//var n=process({a:10,b:"hello"})