class box3 {
    constructor(x, y, width, height) {
      var options = {
           isStatic : false,
           restitution:0.4,
           friction:0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    score(){
      if(this.Visiblity < 0 && this.Visiblity > -1005){
         score++;
      }
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      if(this.body.speed < 8){
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3)
        stroke("black")
        fill(255,255,153);
        rect(0, 0, this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
        
         pop();
       }
       
     }
    
    
    
    };
     
   
  



  