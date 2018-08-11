var nombre = document.
    getElementById("nombre");
var boton = document.
    getElementById("btnSaludar");
var nivel = document.getElementById("nivel");
var fibo = document.getElementById("fibo");
boton.addEventListener("click",saludar);
fibo.addEventListener("click",fibonacii);
var botonMultiplicar = document.getElementById("multiplicar");
var tabla = document.getElementById("tabla");
var area = document.getElementById("areaTablas");
botonMultiplicar.addEventListener("click",tablas);
function saludar(){
    alert("Bienvenido a JS " + nombre.value);
}

function fibonacii(){
    nivel.classList.add("seleccionado");
    var inicial = 0;
    var actual = 1;
    var aux = 0;
    var resultado = 0;    
    for(var i = inicial; i < nivel.value; i++){
        aux = inicial + actual;
         resultado = resultado + 
            inicial + " + " + actual + " = " + 
                aux + "\n";        
        inicial = aux;
        actual = actual + 1; 
    }   
    alert(resultado); 
}

function tablas(){
    var resultado = "";
    var estructura = "";    
    if(tabla.value > 0 && tabla.value <= 10){        
        for(var i = 1; i <= tabla.value; i++){
            estructura = estructura + "<table border='2'><thead><tr><td>Tabla</td></tr></thead><tbody>";
            for(var j = 1; j <= 10; j++){
                resultado = resultado + "<tr><td>" + i + " * " + j + " = " + (i*j) + "</td></tr>";
            }
            estructura = estructura + resultado + "</tbody></table><br>";            
            resultado="";
        }   
        area.innerHTML = estructura;    
    }else{
        alert("Este valor no es valido");
    }
}







