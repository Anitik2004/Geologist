class Stone2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':12
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill(rgb(66, 66, 66));
      rect(0, 0, this.width, this.height);
      pop();
    }
  };