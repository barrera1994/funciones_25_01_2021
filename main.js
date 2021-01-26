//Ejercicio 1
function sumar(a,b){
    return a+b; 
}
let a = parseInt(prompt("Funcion Sumar \n Ingrese el numero 1: "));
let b = parseInt(prompt("Ingrese el numero 2: "));
let numero = sumar(a,b);
alert("la suma es : "+ numero);


//Ejercicio 2
function CalcularEdad(ano1,ano2){
    return ano2-ano1;
}
let anoNacimiento=parseInt(prompt("Funcion calcular edad \n Ingrese el año de nacimiento: "));
let edad=CalcularEdad(anoNacimiento,2021);
alert("Su edad es: "+edad);
