class Apple {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.image = "images/apple.png";
        this.speed = 10;
        this.size = 15;
        this.point = 3;
    }

    render(canvas){
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        // let img = new Image();
        // img.src = this.image;
        // ctx.drawImage(img,this.x,this.y,this.size,this.size);
    }

    dropDown(){
        this.y += this.speed
    }

}