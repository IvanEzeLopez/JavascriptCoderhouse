// Nombre y saludo
let nombreUsuario = prompt("Cuál es tu nombre?");
console.log("Hola" + " " + nombreUsuario);
alert("Hola" + " " + nombreUsuario);
// Donde vive
let paisUsuario = prompt("¿En qué país vivís" + "," + " " + nombreUsuario + "?");
let provinciaUsuario = prompt("¿En qué provincia vivís" + "," + " " + nombreUsuario + "?");
console.log("Ah, vivís en" + " " + provinciaUsuario + "," + " " + paisUsuario);
alert("Ah, vivís en" + " " + provinciaUsuario + "," + " " + paisUsuario);
// Edad
let edad = Number(prompt("¿Qué edad tenés?"));

console.log(edad + 10);  
console.log(edad + 10 + " " + "años" + " " +  "vas a tener dentro de 10 años" + "," + " " + nombreUsuario );  
alert(edad + 10 + " " + "años" + " " +  "vas a tener dentro de 10 años" + "," + " " + nombreUsuario );  
