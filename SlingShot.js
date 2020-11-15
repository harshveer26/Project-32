class SlingShot {
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.007,
          length: 1
      }
      this.pointB = pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
       
  }

  fly(){
    this.sling.bodyA = null;
  }

  attach(body){
    this.sling.bodyA = body;
  }

  display(){

      if(this.sling.bodyA){
          push();
          stroke("blue");
          strokeWeight(4);
          line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
          pop();
      }
  }
  
}