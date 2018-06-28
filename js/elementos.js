function elementos (game){

this.elemento = game 
}

elementos.prototype.dibuja = function(enemigos){
    this.score = "Enemies left: " + enemigos.length
    this.points = "enemies killed: " + this.killed
    this.elemento.ctx.font = '30px serif';
    this.elemento.ctx.fillText(this.score, 1000, 30, 95)
    this.elemento.ctx.fillText(this.points, 1000, 60, 90)

}
