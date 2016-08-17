class Point{
    //x: number;
    //y: number;
    private color: string;
    constructor(public x:number,public y:number){
        this.x=x;
        this.y=y;
        this.color="red";
    }
    dist(){ return Math.sqrt(this.x*this.x+this.y*this.y)}
    static origin=new  Point(0,0);
    
}

let p=new Point(10,20);
p.x=10;
p.y=20;

class Point3D extends Point{
    constructor(x: number,y:number,public z:number){
        super(x,y);
        this.z=z;
    }
    dist(){
        var d=super.dist();
        return Math.sqrt(d*d+this.z*this.z);
    }
}