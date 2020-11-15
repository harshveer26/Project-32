class Polygon {
    constructor(x, y, radius){
        var options = {
            'friction' : 1.2,
            'density' : 0.8,
            'restitution':0.5
            //'isStatic' : true
        }
        
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;

        World.add(world, this.body);

        
    }

    display(){
        var pos = this.body.position;
        push();
        fill("red");
        //stroke("black");
        ///strokeWeight(4);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        circle(0, 0, this.radius);
        pop();
    }
}
