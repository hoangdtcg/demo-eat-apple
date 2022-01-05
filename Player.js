class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.width = 80;
        this.height = 20;
        this.dir = "";
    }

    render(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        // let img = new Image();
        // img.src = this.image;
        // ctx.drawImage(img,100,200,this.size,this.size);
    }

    move(canvas) {
        switch (this.dir) {
            case "left":
                if(this.x > 0)
                    this.x -= this.speed;
                break;
            case "right":
                if(this.x + this.width < canvas.width)
                    this.x += this.speed;
        }
    }

    moveLeft(){
        this.x -= this.speed;
    }

    moveRight(){
        this.x += this.speed;
    }
}