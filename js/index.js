window.onload = function(){
    
document.getElementById("boton").onclick = function (){
     document.getElementById("container").style.display = "none"
     document.getElementById("juego").style.display = "block"
    var juego = new Game('juego') ;
    juego.start();
}
/* for(var i = 0; i <6; i++){
    document.getElementsByClassName("levels")[i].onclick = function (){

        var juego = new Game('juego');
        juego.counter = i;
    }} */




document.getElementById("restart").onclick = function (){
    
    location.reload()
}
}