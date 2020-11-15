class Box4 {
    constructor(x, y, width, height){
        var options = {
            'friction' : 1.2,
            'density' : 0.8,
            //'isStatic' : true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;


        World.add(world, this.body);
    }

    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            push();
            fill("Yellow");
            stroke("black");
            strokeWeight(4);
            translate(pos.x, pos.y);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 4;
            tint(255,this.Visiblity);
            //score++;
            pop(); 
        } 
    }
}