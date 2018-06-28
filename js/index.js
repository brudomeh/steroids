window.onload = function(){
    
document.getElementById("boton").onclick = function (){
     document.getElementById("container").style.display = "none"
     document.getElementById("juego").style.display = "block"
    var juego = new Game('juego') ;
    juego.start();
}

document.getElementById("restart").onclick = function (){
    
    location.reload()
}
}