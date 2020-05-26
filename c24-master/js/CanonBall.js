class CanonBall {
  constructor(x, y,radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }

    this.image = loadImage("sprites/canonBall.png"); 

    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    
}

  display(){

    ellipseMode(RADIUS);
    fill("white");
    ellipse(this.body.position.x,this.body.position.y,this.radius);

  }
}
