function spreads (game){
   
    this.spread = game,
    this.img = new Image();
    this.img.src = './images/type_A.png';
    this.frame = 0;

}

spreads.prototype.draw = function (enemy){

    this.spread.ctx.drawImage(      
        this.img,
        this.frame,
        0,
        50,
        50,
        enemy.x,
        enemy.y,
        50,
        50);

        this.frame += 50


}