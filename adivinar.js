function adivinanzaConsola() {

    console.log('%c-------------------------- Punto   03   -------------------------- ', 'background: orange; color: black');

    // Generamos un número aleatorio entre 1 y 100
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Variable para contar los intentos
    let intentos = 0;

    while (true) {
        // QUe ponga un numero y lo convierto en numero. 
        let numeroIngresado = Number(prompt("Ingrese un número del 1 al 100:" + "(El número secreto es: " + numeroSecreto + " )"));

        // Si acierta el numero salimos del bucle, sino sigue probando.
        if (numeroIngresado === numeroSecreto) {
            intentos++;

            if (intentos == 1) {
                console.log('%c¡Felicitaciones! Adivinaste en el Primer intento...  El  número secreto era el: ' + numeroSecreto, 'background: #BFFF00; color: black');
                break;
            } else {
                console.log('%c¡Felicitaciones! Has adivinado el número secreto en:  ' + intentos + ' intentos. El  número secreto era el: ' + numeroSecreto, 'background: #BFFF00; color: black');
                break;
            }
        }

        // Si ingresa un numero menor al secreto, le aviso y pido que ingrese otro.
        if (numeroIngresado < numeroSecreto) {
            console.log('%cEl número ingresado es menor al número secreto. ', 'background: pink; color: black');
        }

        // Si ingresa un numero mayor al secreto, le aviso y pido que ingrese otro.
        if (numeroIngresado > numeroSecreto) {
            console.log('%cEl número ingresado es mayor al número secreto. ', 'background: pink; color: black');
        }
        // Incrementamos el contador de intentos
        intentos++;
    }

    console.log('%c-------------------------- Punto FIN 03 -------------------------- ', 'background: orange; color: black');



}



function adivinanzaGrafico() {

    console.log('%c-------------------------- Punto   03   -------------------------- ', 'background: orange; color: black');

    // Generamos un número aleatorio entre 1 y 100
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
// Variables para imprimir y vaciar
    let elementosUl = document.getElementById("elementos");
    elementosUl.innerHTML = ""; // Limpiamos la lista

    // Variable para contar los intentos
    let intentos = 0;

    while (true) {
        // QUe ponga un numero y lo convierto en numero. 
        let numeroIngresado = Number(prompt("Ingrese un número del 1 al 100:" + "(El número secreto es: " + numeroSecreto + " )"));

        // Si acierta el numero salimos del bucle, sino sigue probando.
        if (numeroIngresado === numeroSecreto) {
            intentos++;

            if (intentos == 1) {
                elementosUl.innerText = '¡Felicitaciones! Adivinaste en el Primer intento...  El  número secreto era el: ' + numeroSecreto; // muestro en modal
                elementosUl.style.fontSize = "20px";
                elementosUl.style.color = "green";
                console.log('%c¡Felicitaciones! Adivinaste en el Primer intento...  El  número secreto era el: ' + numeroSecreto, 'background: #BFFF00; color: black');
                break;
            } else {
                elementosUl.innerText = '¡Felicitaciones! Has adivinado el número secreto en:  ' + intentos + ' intentos. El  número secreto era el: ' + numeroSecreto; // muestro en modal
                elementosUl.style.fontSize = "20px";
                elementosUl.style.color = "green";
                console.log('%c¡Felicitaciones! Has adivinado el número secreto en:  ' + intentos + ' intentos. El  número secreto era el: ' + numeroSecreto, 'background: #BFFF00; color: black');
                break;
            }
        }

        // Si ingresa un numero menor al secreto, le aviso y pido que ingrese otro.
        if (numeroIngresado < numeroSecreto) {
         
               console.log('%cEl número ingresado es menor al número secreto. ', 'background: pink; color: black');
                    
        }

        // Si ingresa un numero mayor al secreto, le aviso y pido que ingrese otro.
        if (numeroIngresado > numeroSecreto) {
            
            console.log('%cEl número ingresado es mayor al número secreto. ', 'background: pink; color: black');
        }
        // Incrementamos el contador de intentos
        intentos++;
    }

    console.log('%c-------------------------- Punto FIN 03 -------------------------- ', 'background: orange; color: black');



}
