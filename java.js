// punto 1

let miNombre = "Maximiliano";


// punto 2

let miApellido = "Zarate";


// punto 3

let miEdad = 36;


// punto 4

let miMascota = "Chula";


// punto 5

let edadMascota = 4;


// punto 6

console.log('%c-------------------------- Punto   06   -------------------------- ', 'background: pink; color: black');


console.log(miNombre);
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);


console.log('%c-------------------------- Punto FIN 06 -------------------------- ', 'background: pink; color: black');


// punto 7


console.log('%c-------------------------- Punto   07   -------------------------- ', 'background: pink; color: black');

let nombreCompleto = miNombre + " " + miApellido;
console.log(nombreCompleto);


console.log('%c-------------------------- Punto FIN 07 -------------------------- ', 'background: pink; color: black');


// punto 8

console.log('%c-------------------------- Punto   08   -------------------------- ', 'background: pink; color: black');

let textoPresentacion =
  "Mi Nombre es: " +
  nombreCompleto +
  " tengo " +
  miEdad +
  ' años, tengo una mascota que se llama "' +
  miMascota +
  '" y tiene ' +
  edadMascota +
  " años.";
console.log(textoPresentacion);


console.log('%c-------------------------- Punto FIN 08 -------------------------- ', 'background: pink; color: black');

// punto 9


console.log('%c-------------------------- Punto   09   -------------------------- ', 'background: pink; color: black');

let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;
console.log("La Suma de mi edad y la de mi mascota es: " + sumaEdades);
console.log("La Resta de mi edad y la de mi mascota es: " + restaEdades);
console.log("El Producto de mi edad y la de mi mascota es: " + productoEdades);
console.log("La Division de mi edad y la de mi mascota es: " + divisionEdades);


console.log('%c-------------------------- Punto FIN 09 -------------------------- ', 'background: pink; color: black');


// punto 10

// miNombre = prompt("¿Cómo te llamas", "Maximiliano");
// miApellido = prompt("¿Cómo te llamas", "Zarate");
// miEdad = prompt("¿Cómo te llamas", "36");
// miMascota = prompt("¿Cómo te llamas", "Chula");
// edadMascota = prompt("¿Cómo te llamas", "4");

console.log('%c-------------------------- Punto   10   -------------------------- ', 'background: pink; color: black');


console.log("La Suma de mi edad y la de mi mascota es: " + sumaEdades);
console.log("La Resta de mi edad y la de mi mascota es: " + restaEdades);
console.log("El Producto de mi edad y la de mi mascota es: " + productoEdades);
console.log("La Division de mi edad y la de mi mascota es: " + divisionEdades);


console.log('%c-------------------------- Punto FIN 10 -------------------------- ', 'background: pink; color: black');


// punto 11

console.log('%c-------------------------- Punto   11   -------------------------- ', 'background: pink; color: black');

let alumno = {
  nombre: "Jose",
  apellido: "Perez",
  edad: 22,
  carrera: "Podologia",
  cuotaPaga: true
};


console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.carrera);
console.log(alumno.cuotaPaga);


console.log('%c-------------------------- Punto FIN 11 -------------------------- ', 'background: pink; color: black');


// punto 12

console.log('%c-------------------------- Punto   12   -------------------------- ', 'background: pink; color: black');

let mascota = {
  nombre: "Chula",
  genero: "hembra",
  edad: 4,
  raza: "Pinsher",
  vacunada: true
};


console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.genero);
console.log(mascota.edad);
console.log(mascota.raza);
console.log(mascota.vacunada);


console.log('%c-------------------------- Punto FIN 12 -------------------------- ', 'background: pink; color: black');


// punto 13


console.log('%c-------------------------- Punto   13   -------------------------- ', 'background: pink; color: black');


let frutas = ["Banana", "Naranja", "Manzana", "Pera", "Sandia"];
console.table(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);


console.log('%c-------------------------- Punto FIN 13 -------------------------- ', 'background: pink; color: black');


// punto 14


console.log('%c-------------------------- Punto   14   -------------------------- ', 'background: pink; color: black');


let números = ["0", "1", "2", "3", "4"];
console.table(números);
console.log(números[0]);
console.log(números[1]);
console.log(números[2]);
console.log(números[3]);
console.log(números[4]);


console.log('%c-------------------------- Punto FIN 14 -------------------------- ', 'background: pink; color: black');


// punto 15


console.log('%c-------------------------- Punto   15   -------------------------- ', 'background: pink; color: black');


let familia = ["Madre", "Padre", "Hijo", "Mascota", "Amante"];
console.table(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);


console.log('%c-------------------------- Punto FIN 15 -------------------------- ', 'background: pink; color: black');


// punto 16


console.log('%c-------------------------- Punto   16   -------------------------- ', 'background: pink; color: black');


let textoAleatorio = frutas[1] + " ," + números[3] + " ," + familia[4];
console.log(textoAleatorio);


console.log('%c-------------------------- Punto FIN 16 -------------------------- ', 'background: pink; color: black');


// punto 17

console.log('%c-------------------------- Punto   17   -------------------------- ', 'background: pink; color: black');

let edadMia = 36;
let edadCompañero = 22;
// let edadMia = prompt("Edad Mia");
// let edadCompañero = prompt("Edad Compañero");
let edadesIguales = edadMia === edadCompañero ? "true" : "false";
let soyMayor = edadMia > edadCompañero ? "true" : "false";
let soyMenor = edadMia < edadCompañero ? "true" : "false";

console.log("Mi edad es igual a la de mi compañero: " + edadesIguales);
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor);
console.log("Mi edad es menor a la de mi compañero: " + soyMenor);


console.log('%c-------------------------- Punto FIN 17 -------------------------- ', 'background: pink; color: black');


// punto 18


console.log('%c-------------------------- Punto   18   -------------------------- ', 'background: pink; color: black');

let edad18 = 18;
let diferencia = edadMia - edad18;
let soyMayorDeEdad = edadMia > edad18 ? console.log("Soy mayor de edad " + diferencia) : console.log("Soy menor de 18 ");

console.log('%c-------------------------- Punto FIN 18 -------------------------- ', 'background: pink; color: black');


// punto 19


// let edad = prompt("Edad: ");
// let altura = prompt("altura: ");
console.log('%c-------------------------- Punto   19   -------------------------- ', 'background: pink; color: black');


let edad = 15;
let altura = 124;
puedeSubir = edad > 6 && altura > 120 ? console.log("Puede subir a la atracción, " + true) : console.log("No puede subir a la atracción, " + false);


console.log('%c-------------------------- Punto FIN 19 -------------------------- ', 'background: pink; color: black');


// punto 20

// let saldo = prompt("Saldo: ");
// let estado = prompt("Estado de la Persona: ");

console.log('%c-------------------------- Punto   20   --------------------------', 'background: pink; color: black');


let saldo = 1000;
let estado = "VIP";

function puedePasar(saldo, estado) {
  if (saldo > 1000 || estado == "VIP") {
    return "Esta persona puede pasar"
  }
  else {
    return "Esta persona NO puede pasar"
  }
}

console.log(puedePasar(saldo, estado))


console.log('%c-------------------------- Punto FIN 20 -------------------------- ', 'background: pink; color: black');


