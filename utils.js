var Acme;
(function (Acme) {
    var Utils;
    (function (Utils) {
        var Tracker = (function () {
            function Tracker() {
                this.count = 0;
            }
            Tracker.prototype.plusOne = function () {
                this.count++;
            };
            return Tracker;
        }());
        Utils.tracker = new Tracker();
    })(Utils = Acme.Utils || (Acme.Utils = {}));
})(Acme || (Acme = {}));
var Acme;
(function (Acme) {
    var Utils;
    (function (Utils) {
        Utils.greeting = "hello";
    })(Utils = Acme.Utils || (Acme.Utils = {}));
})(Acme || (Acme = {}));
var tracker = Acme.Utils.tracker;
console.log(Acme.Utils.greeting);
tracker.plusOne();
console.log(tracker.count);
var tracker2 = Acme.Utils.tracker;
tracker2.plusOne();
console.log(tracker2.count);
//# sourceMappingURL=utils.js.map