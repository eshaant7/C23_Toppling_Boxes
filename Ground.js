class Ground{
    constructor(){
       var option = {
           'isStatic': true
       }

        this.body = Bodies.rectangle(200, 380, 400, 20, option);
        this.width = 400;
        this.height = 20;

        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);

        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}