console.log('%c---------------------------------------------------- ', 'background: pink; color: black');
console.log('%c---------------------------------------------------- ', 'background: pink; color: black');
console.log('\n\n ');
// FOR

console.log('%c------------------------FOR---------------------------- ', 'background: ORANGE; color: black');

let arr = ['Ultra', 'Pantunflas', 'Intrusa', 'Tokio'];

for(let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}



for (let i = 10; i >= arr.length; i--) {
    console.log("numero: " + i);
}


console.log('%c------------------------Recorrer con FOR IN---------------------------- ', 'background: ORANGE; color: black');

let persona ={
    nombre: "Maxi",
    epellido: "Zarate",
    edad: 36,
    gatitos: arr
}

// in persona, dice cual es ebjeto que voy a recorrer.
// clave (cualquier nombre), remplaza en el objeto clave es = nombre, despues apellido, despues edad...

for (let clave in persona){
    console.log(persona[clave]); // imprimi las propiedades de la variable persona.
    }
    

console.log('%c---------------------------------------------------- ', 'background: pink; color: black');

for (let i in persona){
        console.log(persona[i]); // imprimi las propiedades de la variable persona.
        }

console.log('%c------------------------Recorrer con FOR OF---------------------------- ', 'background: ORANGE; color: black');

for (let valor of arr){
    console.log("Nombre: " +valor);
}

console.log('%c------------------------Recorrer con FOR OF---------------------------- ', 'background: ORANGE; color: black');
console.log('%c---------------------Separa las Palabras------------------------------- ', 'background: pink; color: black');
for (let letra of arr[0]){
    console.log("Nombre: " + letra);
}

console.log('%c------------------------WHILE---------------------------- ', 'background: ORANGE; color: black');

// inicializo i, siempre en 0, se fija si es menor que arr.length (ve cuantas palabras hay, aca hay 4)
// imprime la palabra, suma 1, y verifica si es menor a 4 hasta que llega y frena.
// arr[i] es como poner arr[0], arr[1]....
let i = 0;
while(i < arr.length){
    console.log(arr[i]);
    i++;
}

console.log('%c---------------------While hasta que usuario ponga valor------------------------------- ', 'background: pink; color: black');
// let max = prompt("indique el numero maximo");
let max = "5";
 let j = 1;
 while (j <= max) {
      console.log(j);
     j++;
 }

console.log('%c---------------------Busca nombre con A------------------------------- ', 'background: pink; color: black');

// compara con persona y personas.
let personas = [
    {
    nombre: "Juan",
    apellido: "Malbran",
    mascota: []
    
},

{
    nombre: "Jose",
    apellido: "Arce",
    mascota: ["Chula", "Mara"]
    
},
{
    nombre: "Antonio",
    apellido: "Arbusto",
    mascota: ["Superman"]
    
},
{
    nombre: "Asusena",
    apellido: "Justo",
    mascota: ["Lucho", "Chulo", "Gaturro"]
    
}
];

for (let alumno of personas){
    if (alumno.nombre[0] == "A"){
        console.log(alumno.nombre);
    }
}
console.log('%c---------------------Busca nombre con A mayuscula o Minusculas------------------------------- ', 'background: pink; color: black');

for(let alumno of personas){
    if (alumno.nombre[0].toLowerCase() == "a") {
        console.log(alumno.nombre);
    }
}

for(let alumno of personas){
    if (alumno.nombre[0].toLowerCase() == "a" && alumno.apellido[0].toLowerCase() == "a") {
         console.log(alumno.nombre);
    }
}


console.log('%c---------------------Muestra las Mascotas------------------------------- ', 'background: pink; color: black');

for (let humano of personas){
    console.log("Mascotas de " +humano.nombre+":");
    for (let mascota of humano.mascota){
        console.log(mascota);
    }
}

console.log('%c---------------------Busca si tiene mascotas ------------------------------- ', 'background: pink; color: black');
for (let humano of personas){
    console.log("Mascotas de " +humano.nombre+":");
    let contador=1;
    for (let mascota of humano.mascota){
        console.log(contador+":"+mascota);
        contador++;
    }
}

console.log('%c---------------------Muestra Mascotas con IF si no tiene pone Ninguna------------------------------- ', 'background: pink; color: black');
for (let humano of personas){
    console.log("Mascotas de " +humano.nombre+":");
    let contador=1;
    if (humano.mascota.length > 0) {
    for (let mascota of humano.mascota){
        console.log(contador+":"+mascota);
        contador++;
    }
}else{
    console.log("Ninguna");
}
}
console.log('%c------------------------ CON TABLA---------------------------- ', 'background: pink; color: black');
for(let humano of personas){
    console.log("Mascotas de "+humano.nombre+":");
    let cm = 1;
    if (humano.mascota.length > 0) {
        console.table(humano.mascota);
    } else {
        console.log("ninguna")
    }
}

console.log('%c------------------------ FINAL--------------------------- ', 'background: ORANGE; color: black');