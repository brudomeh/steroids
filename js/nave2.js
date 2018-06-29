function Player(game, bullets) {
    this.game = game;

    this.W = 1200;
    this.H = 600;
    this.x = 100;
    this.y = 60;

    this.img = new Image();
    this.img.src = "./images/nave3.png";

    this.w = 40;
    this.h = 20;

    this.dy = 0;
    this.dx = 0; 
    this.angle = 0;
    this.trust = 0;
    this.maxSpeed = 5;
    this.speed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);

    this.bullets = bullets;

}

Player.prototype.draw = function () {
    this.game.ctx.save();
    this.game.ctx.translate(this.x, this.y);
    this.game.ctx.rotate(this.angle * 2);
    this.game.ctx.drawImage(
        this.img, -20, -10,
        this.w,
        this.h
    );
    this.game.ctx.restore();

    //   this.move();
};

Player.prototype.setListeners = function () {
    document.onkeydown = function (event) {
        if (event.keyCode == 37) this.angle += 3;
        if (event.keyCode == 39) this.angle -= 3;
        if (event.keyCode == 38) this.trust = true;
        if (event.keyCode == 32) this.game.bullets.creation();
    }.bind(this);
    document.onkeyup = function (event) {
        if (event.keyCode == 38) this.trust = false;
    }.bind(this);
};

Player.prototype.move = function () {
    if (this.trust) {
        this.dx += Math.cos(this.angle * 2) * 0.15;
        this.dy += Math.sin(this.angle * 2) * 0.15;

    } else {
        this.dx *= 0.98;
        this.dy *= 0.98;
    }
    if (this.speed > this.maxSpeed) {
        this.dx *= this.maxSpeed;
        this.dy *= this.maxSpeed;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (this.x > this.W+5) this.x = -5;
    if (this.x < -6) this.x = this.W+6;
    if (this.y > this.H+5) this.y = -5;
    if (this.y < -6) this.y = this.H +6;

};

Player.prototype.fin = function (enemigos){

    for(var i = 0 ; i < enemigos.length ; i++){

        if(this.x + 5 > enemigos[i].x &&
        this.x -5 < enemigos[i].x + enemigos[i].enemigosW &&
        this.y > enemigos[i].y &&
        this.y < enemigos[i].y + enemigos[i].enemigosH){

            document.getElementById('juego').style.display = 'none'
            document.getElementById('gameOver').style.display = 'block'

        }

    }

}












































/*     function spaceship(x, y, ) {
        this.x = x;
        this.y = y;
        this.angle = Math.PI;
        this.angularSpeed = 0;
        this.speed = 0;
        this.acc = 0;
        this.img = new Image();
        this.ratio = 900 / 490;
        this.carSize = 50;
        this.img.src = "./images/nave.png"
    }

    spaceship.prototype.update = function (delta) {

        this.angle += this.angularSpeed;
        this.speed += this.acc;
        this.speed *= 0.95;
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }

    spaceship.prototype.deToRad = function degToRad(angle) {
        return (angle * 2 * Math.PI) / 360;
    }

    spaceship.prototype.draw = function (ctx) {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.angle);
        this.ctx.drawImage(this.img, -this.carSize * this.ratio / 2, -this.carSize / 2,
            this.carSize * this.ratio, this.carSize);
        this.ctx.restore();
    }

    spaceship.prototype.turnAngleSpeed = function (aS) {
        if (this.angularSpeed < degToRad(10) && this.angularSpeed > -degToRad(10)) {
            this.angularSpeed += degToRad(aS);
        }
    }

    spaceship.prototype.handleKeyDown = function (key) {
        console.log(key);
        switch (key) {
            case 38: // Up
                this.acc = -0.5;
                break;
            case 40: // down
                this.acc = 0.5;
                break;
            case 37: // left
                this.turnAngleSpeed(-1);
                break;
            case 39: // right
                this.turnAngleSpeed(1);
                break;
        }
    }

    spaceship.prototype.handleKeyUp = function (key) {
        switch (key) {
            case 38: // Up
                this.acc = 0;
                break;
            case 40: // down
                this.acc = 0;
                break;
            case 37: // left
                this.angularSpeed = 0;
                break;
            case 39: // right
                this.angularSpeed = 0;
                break;
        }
    }

    spaceship.prototype.renderizado = function() {

        var lastTime = 0;
        var that = this 

        function update(time) {
            var delta = time - lastTime;
            lastTime = time;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            that.spaceship.update(delta);
            that.spaceship.draw(ctx);
            window.requestAnimationFrame(update);
        };


        window.requestAnimationFrame(update);
    }

    document.onkeydown = function (e) {
        spaceship.handleKeyDown(e.keyCode);
    }

    document.onkeyup = function (e) {
        spaceship.handleKeyUp(e.keyCode);
    } */