var Grocery;
(function (Grocery) {
    var Main = (function () {
        function Main() {
        }
        Main.prototype.init = function () {
            console.log("fazendo os bindings");
        };
        return Main;
    }());
    Grocery.Main = Main;
})(Grocery || (Grocery = {}));
