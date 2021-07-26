//create class for pillar
class pillar {
    //create the constructor
    constructor(x, y, w, h) {
    //define behaviour of the object
    let options = {
    isStatic : true,
    };
        
    //define properties of the object
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
    }
    
    //create display function
    display() {
    //declare a sample variable
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
      }
    }