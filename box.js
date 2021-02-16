function Box(x,y,w,h){
  this.body = Bodies.rectangle(x,y,w,h);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  World.add(engine.world, this.body);
  
  this.show = function(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(200);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
  
}
