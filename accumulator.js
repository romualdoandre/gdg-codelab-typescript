function makeAccumulator() {
    var sum = 0;
    return {
        clear: function () { sum = 0; },
        add: function (value) { sum += value; },
        result: function () { return sum; }
    };
}
var a = makeAccumulator();
a.clear();
a.add(10);
console.log(a.result());
a.add(10);
console.log(a.result());
//# sourceMappingURL=accumulator.js.map