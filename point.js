var Geometry;
(function (Geometry) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
            this.x = x;
            this.y = y;
            this.color = "red";
        }
        Point.prototype.dist = function () { return Math.sqrt(this.x * this.x + this.y * this.y); };
        Point.origin = new Point(0, 0);
        return Point;
    }());
    Geometry.Point = Point;
})(Geometry || (Geometry = {}));
var p = new Geometry.Point(10, 20);
p.x = 10;
p.y = 20;
console.log(p.dist());
