//IF - ELSE

let promedio_de_asistencia =70
let proyecto_final = "ok";

if(promedio_de_asistencia >= 70 && proyecto_final === "ok"){
    console.log("El alumno esta en condicion de aprobar.");
}

else if(promedio_de_asistencia >= 70 && proyecto_final === "ok"){
    console.log("Al alumni le falta alguna de las condiciones.")
}


else{
    console.log("El alumno no esta en condiciones de aprobar.");
}

/*crea un algoritmo que solicite al usuario unno o mas valores ingresados por prompt(), compare las entradas y, en funcion de ciertas condiciones, muestre por consola o alert() el resultado segun los valores ingresados y las condiciones cumplidas

Tematica 15*/

let edad = prompt("¿Cual es tu edad?");

if (){
    alert("Podes pasar.");
}

else{
    alert("No podes pasar.")
    console.log("No podes pasar.")
}


let botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click",saludar,false);

setInterval(saludar,100)
//setInterval(nombreFuncion,delayMilisegundo);
