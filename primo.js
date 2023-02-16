function primoCodigoConsola() {

    // PUNTO 04
    console.log('%c-------------------------- Punto   04   -------------------------- ', 'background: orange; color: black');

    let numero = parseInt(prompt("Ingresa un número: "));
    let esPrimo = true;
    
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
    
    if (esPrimo) {
        console.log('%c'+numero + ' es primo.', 'background: yellow; color: black');
    } else {
        console.log('%c'+numero + ' no es primo.', 'background: pink; color: black');
    }
    console.log('%c-------------------------- Punto FIN 04 -------------------------- ', 'background: orange; color: black');



}


function primoCodigoGrafico() {

  // PUNTO 04
  console.log('%c-------------------------- Punto   04   -------------------------- ', 'background: orange; color: black');

  let numero = parseInt(prompt("Ingresa un número: "));
  let esPrimo = true;
  let elementosUl = document.getElementById("elementos");
  elementosUl.innerHTML = ""; // Limpiamos la lista
  
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  
  if (esPrimo) {
      elementosUl.innerText = numero + ' es primo.'; // muestro en modal
      console.log('%c'+numero + ' es primo.', 'background: yellow; color: black');
  } else {
    elementosUl.innerText = numero + ' no es primo.'; // muestro en modal
      console.log('%c'+numero + ' no es primo.', 'background: pink; color: black');
  }
  console.log('%c-------------------------- Punto FIN 04 -------------------------- ', 'background: orange; color: black');



}


