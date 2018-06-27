function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.reset();
    this.enemies.creation();

}

Game.prototype.start = function () {
    this.interval = setInterval(
        function () {
            this.clear();
            this.draw();
            this.shoot();
            this.move()
            /*   this.player.setListeners();
            this.player.move(); */
            this.colisions(this.bullets.cargador);
            this.gameOver(this.enemies.enemigos)
            this.enemies.enemigos.forEach(element => {

                element.draw();
            });

        }.bind(this),
        1000 / this.fps
    );
};

Game.prototype.reset = function () {

    this.player = new Player(this);
    this.enemies = new enemies(this);
    this.bullets = new bullets(this);

};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function () {

    this.player.draw();
    this.bullets.draw();


};

Game.prototype.move = function (){

    this.player.move();
    this.player.setListeners();
}

Game.prototype.shoot = function(){

    this.bullets.fire();
}

Game.prototype.colisions = function(cargador){

    this.enemies.check(cargador);
}

Game.prototype.gameOver = function (enemigos){

    this.player.fin(enemigos)
}