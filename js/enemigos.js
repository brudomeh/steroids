function enemies(game) {

    this.enemie = game;
    this.radius = 10;
    this.y = Math.floor(Math.random() * 600);
    this.x = Math.floor(Math.random() * 1000);
    this.vx = (Math.floor(Math.random() * 6)) - (Math.floor(Math.random() * 2.5));
    this.vy = (Math.floor(Math.random() * 6)) - (Math.floor(Math.random() * 2.5))
    this.color = '#FCF902'
    this.W = 1000;
    this.H = 600;
    this.enemigosW = 17;
    this.enemigosH = 17
    this.enemigos = [];

}



enemies.prototype.draw = function () {

    this.enemie.ctx.save();
    this.enemie.ctx.beginPath();
    this.enemie.ctx.fillStyle = this.color
    this.enemie.ctx.fillRect(this.x, this.y, this.enemigosW, this.enemigosH, );
    this.enemie.ctx.closePath();
    this.enemie.ctx.fill();
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.vy > 700 || this.y + this.vy < -100) {
        this.vy *= -1;
    }
    if (this.x + this.vx > 1100 || this.x + this.vx < -100) {
        this.vx *= -1;
    }



}

enemies.prototype.creation = function (cargador) {

    for (var i = 0; i < 25; i++) {
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
            }
        }
    }
}