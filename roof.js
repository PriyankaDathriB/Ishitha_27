//class roof {
class Roof {
    constructor(x,y,width,height){
       
       this.width = width;
       this.height = height;
       //this.body = bodies.rectangle(x,y,width,height,{isStatic : true})
       //World.add = (world,this.bodies)
       this.body = Bodies.rectangle(x,y,width,height,{isStatic : true})
       World.add(world,this.body)
        }
        
        
        
    
    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}