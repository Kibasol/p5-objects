function setup(){
    createCanvas(600,400);
    p1 = new Pacman(300, 200);
}

function draw(){
    background(0);
    p1.display();
    p1.move();
}

function Pacman(x, y){
    this.x = x;
    this.y = y;
    this.display = function(){
        fill(255,255,0);
        ellipse(this.x, this.y,40, 40);
    }
    this.move = function(){
        if(keyIsDown(UP_ARROW)){
        this.y = this.y -= 5;
        }
        key(keyIsDown(DOWN_ARROW)){
            this.y += 5;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += 5;
        }
    }
}