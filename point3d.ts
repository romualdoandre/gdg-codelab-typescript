
class Point3D extends Geometry.Point{
    constructor(x: number,y:number,public z:number){
        super(x,y);
        this.z=z;
    }
    dist(){
        var d=super.dist();
        return Math.sqrt(d*d+this.z*this.z);
    }
}