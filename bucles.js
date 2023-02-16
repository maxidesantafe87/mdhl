
console.log('\n\n ');



console.log('%c---------------------------------------------------------- ', 'background: ORANGE; color: black');
console.log('%c------------------------BUCLES---------------------------- ', 'background: ORANGE; color: black');
console.log('%c---------------------------------------------------------- ', 'background: ORANGE; color: black');


// punto 01

console.log('%c-------------------------- Punto   01   -------------------------- ', 'background: pink; color: black');

// Pedimos al usuario que ingrese un número

//let numero = parseInt(prompt("Ingresa un número"));
let numero = 2;
// Mostramos la tabla de multiplicar del número ingresado
console.log("Tabla de multiplicar del " + numero + ":");

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}


console.log('%c-------------------------- Punto FIN 01 -------------------------- ', 'background: pink; color: black');


// Punto 02
console.log('%c-------------------------- Punto   02   -------------------------- ', 'background: pink; color: black');

// Creamos una variable para almacenar el acumulador
let acumulador = 0;

// Creamos un ciclo "while" que se ejecutará hasta poner 0
while (true) {
  // QUe ponga un numero y lo convierto en numero. 
//   let numero = Number(prompt("Ingrese un número (o ingrese 0 para terminar):"));

    let numero = 0; // pongo para que no me salte cartel.
  // Si pone 0 termina
  if (numero === 0) {
    break;
  }

  // Si es otro numero lo voy sumando.
  acumulador += numero;
}

// Cuando termina muestra lo que se acumulo
console.log("El valor acumulado es: " + acumulador);


console.log('%c-------------------------- Punto FIN 02 -------------------------- ', 'background: pink; color: black');



// PUNTO 03


console.log('%c-------------------------- Punto   03   -------------------------- ', 'background: pink; color: black');


// Generamos un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Variable para contar los intentos
let intentos = 0;


while (true) {
    // QUe ponga un numero y lo convierto en numero. 
  let numeroIngresado = Number(prompt("Ingrese un número del 1 al 100:" +"(El número secreto es: " +numeroSecreto+" )"));

  // Si acierta el numero salimos del bucle, sino sigue probando.
  if (numeroIngresado === numeroSecreto) {
    intentos++;
    console.log("¡Felicitaciones! Has adivinado el número secreto en " + intentos + " intentos. El  número secreto era el: "+numeroSecreto);
    break;
  }

  // Si ingresa un numero menor al secreto, le aviso y pido que ingrese otro.
  if (numeroIngresado < numeroSecreto) {
    console.log("El número ingresado es menor al número secreto.");
  }

  // Si ingresa un numero mayor al secreto, le aviso y pido que ingrese otro.
  if (numeroIngresado > numeroSecreto) {
    console.log("El número ingresado es mayor al número secreto.");
  }

  if (numeroIngresado === numeroSecreto) {
    console.log("¡Felicitaciones! Sos un capo! adivinaste de una ( o hiciste trampa?). El  número secreto era el: "+numeroSecreto);
  }

  // Incrementamos el contador de intentos
  intentos++;
}


console.log('%c-------------------------- Punto FIN 03 -------------------------- ', 'background: pink; color: black');
