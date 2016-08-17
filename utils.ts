module Acme.Utils{
    export class Tracker{
        count=0;
        start(){
            window.onmousemove=e=>{
                console.log(this.count++);
            }
        }
    }
}

module Acme.Utils{
    export var greeting="hello"
}

import Acc=Acme.Utils;
Acme.Utils.greeting;
var t=new Acc.Tracker();
t.start();
