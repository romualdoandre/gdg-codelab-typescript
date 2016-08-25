var Acme;
(function (Acme) {
    var Utils;
    (function (Utils) {
        var Tracker = (function () {
            function Tracker() {
                this.count = 0;
            }
            Tracker.prototype.start = function () {
                var _this = this;
                window.onmousemove = function (e) {
                    console.log(_this.count++);
                };
            };
            return Tracker;
        }());
        Utils.Tracker = Tracker;
    })(Utils = Acme.Utils || (Acme.Utils = {}));
})(Acme || (Acme = {}));
var Acme;
(function (Acme) {
    var Utils;
    (function (Utils) {
        Utils.greeting = "hello";
    })(Utils = Acme.Utils || (Acme.Utils = {}));
})(Acme || (Acme = {}));
var Acc = Acme.Utils;
Acme.Utils.greeting;
var t = new Acc.Tracker();
t.start();
