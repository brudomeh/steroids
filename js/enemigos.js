function enemies(game, spreads) {

    this.enemie = game;
    this.spreads = spreads;
    this.radius = 10;
    this.y = Math.floor(Math.random() * 500) + 100;
    this.x = Math.floor(Math.random() * 900) +150;
    this.vx = (Math.floor(Math.random() * 5)) - (Math.floor(Math.random() * 1));
    this.vy = (Math.floor(Math.random() * 5)) - (Math.floor(Math.random() * 1))
    this.color = '#FCF902'
    this.W = 1000;
    this.H = 600;
    this.enemigosW = 40;
    this.enemigosH = 40;
    this.enemigos = [];
    this.killed = 0
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
    this.enemie.ctx.closePath();
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

enemies.prototype.creation = function (index, player) {

    var niveles = [5, 20, 30, 45, 60, 100]


    for (var i = 0; i < niveles[index]; i++) {

                this.enemigos.push(new enemies(this.enemie));
                this.enemigos[i].draw();
        }
}

enemies.prototype.check = function (cargador) {

    for (var i = 0; i < this.enemigos.length; i++) {

        for (var j = 0; j < cargador.length; j++) {

            if (cargador[j].x > this.enemigos[i].x &&
                cargador[j].x < this.enemigos[i].x + this.enemigos[i].enemigosW - 3 &&
                cargador[j].y < this.enemigos[i].y + this.enemigos[i].enemigosH - 3 &&
                cargador[j].y > this.enemigos[i].y
            ) {

                cargador.splice(j, 1)
                this.spreads.draw(this.enemigos[i]);
                this.enemigos.splice(i, 1)
                this.killed++

            }
        }
    }
}