interface Accumulator{
    clear(): void;
    add(x: number): void;
    result(): number;
}


function makeAccumulator(): Accumulator{
    var sum=0;
    return{
        clear: function(){sum=0},
        add: function(value: number){sum+=value},
        result: ()=>sum
    }
}
let a=makeAccumulator();
a.add(10);