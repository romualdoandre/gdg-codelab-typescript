module Acme.Utils{
    class Tracker{
        count=0;
        plusOne(){
            this.count++;
        }
    }
    export var tracker=new Tracker();
}

module Acme.Utils{
    export var greeting="hello"
}

import tracker=Acme.Utils.tracker;
console.log(Acme.Utils.greeting);
tracker.plusOne();
console.log(tracker.count);
import tracker2=Acme.Utils.tracker;
tracker2.plusOne();
console.log(tracker2.count);