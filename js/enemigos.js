function enemies(game) {

    this.enemie = game;
    this.radius = 10;
    this.y = Math.floor(Math.random() * 600);
    this.x = Math.floor(Math.random() * 1000);
    this.vx = (Math.floor(Math.random() * 4)) - (Math.floor(Math.random() * 1));
    this.vy = (Math.floor(Math.random() * 4)) - (Math.floor(Math.random() * 1))
    this.color = '#FCF902'
    this.W = 1000;
    this.H = 600;
    this.enemigosW = 40;
    this.enemigosH = 40;
    this.enemigos = [];
    this.img = new Image();
    this.img.src = './images/asteroide.png'
    this.sprite = new Image();
    this.sprite.src = './images/type_A.png';
    this.frame = 0;

}



enemies.prototype.draw = function () {

    this.enemie.ctx.save();
    this.enemie.ctx.beginPath();
    this.enemie.ctx.fillStyle = this.color
    this.enemie.ctx.drawImage(this.img, this.x, this.y, this.enemigosW, this.enemigosH, )
/*     this.enemie.ctx.fillRect(this.x, this.y, this.enemigosW, this.enemigosH, );
 */    this.enemie.ctx.closePath();
    this.enemie.ctx.fill();
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.vy > 700 || this.y + this.vy < -100) {
        this.vy *= -1;
    }
    if (this.x + this.vx > 1300 || this.x + this.vx < -100) {
        this.vx *= -1;
    }



}

enemies.prototype.creation = function () {

    for (var i = 0; i < 10; i++) {
        this.enemigos.push(new enemies(this.enemie));
        this.enemigos[i].draw();
    }
}

enemies.prototype.check = function (cargador) {
    
    for (var i = 0; i < this.enemigos.length; i++) {
        
        for (var j = 0; j < cargador.length; j++) {
            
            if (cargador[j].x + cargador[j].bulletW > this.enemigos[i].x &&
                cargador[j].x < this.enemigos[i].x + this.enemigos[i].enemigosW &&
                cargador[j].y < this.enemigos[i].y + this.enemigos[i].enemigosH && 
                cargador[j].y + cargador[j].bulletH > this.enemigos[i].y
            ) {
                
                cargador.splice(j, 1)
                this.enemigos.splice(i,1)
                this.enemie.ctx.drawImage(
                    this.sprite,
                    this.frame,
                    0,
                    50,
                    50,
                    this.enemigos[i].x,
                    this.enemigos[i].y,
                    this.enemigos[i].enemigosW,
                    this.enemigos[i].enemigosH)
                    this.frame += 50

                    console.log("hola")
            }
        }
    }
}