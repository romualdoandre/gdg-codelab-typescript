var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
        this.z = z;
    }
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Geometry.Point));
