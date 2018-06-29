function elementos (game){

this.elemento = game 
}

elementos.prototype.dibuja = function(enemigos){
    this.score = "Enemies left: " + enemigos.length
    this.elemento.ctx.font = '40px serif';
    this.elemento.ctx.fillStyle = 'white'
    this.elemento.ctx.fillText(this.score, 1000, 40, 110)

}
