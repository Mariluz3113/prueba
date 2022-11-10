/* 14) Usando el método prompt() pedile al usuario que ingrese un número.
Definí 3 caminos, usando en cada uno el método document.write() para dejar un
mensaje según la elección.
• Si el número es mayor a 10.
• Si el número es menor o igual a 10.
• Si no es un número.*/

/*let number = prompt("ingrese un numero");
if (number > 10) {
    alert ("su numero es mayor a 10");
}else if (numero < 10) {
    console.log("es menor o igual a 10");
} else {
    document.write ("no es un numero");
}*/

/* 15) Mariana nos dice que para ella un número es de la suerte si cumple
con las siguientes tres condiciones:
★ ese número es positivo
★ ese número es múltiplo de 2 o de 3
★ ese número no es el 15
Escribí la función esNumeroDeLaSuerte() la cual recibiendo un número, le diga a
Mariana si es un número de la suerte.*/

function esNumeroDeLaSuerte(num1) {
    if ((num1 > 0) && (num1 % 2 == 0 || num1 % 3 == 0) && (num1 != 15)); {
        alert ("esun numero de la suerte");
    }else {
        alert("no es un numero de la suerte");
    }
}


     