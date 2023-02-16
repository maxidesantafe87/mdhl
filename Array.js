function arrayCodigo() {

    // PUNTO 06
    console.log('%c-------------------------- Punto   06   -------------------------- ', 'background: orange; color: black');

    let miArray = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5", "elemento6", "elemento7", "elemento8", "elemento9", "elemento10"];

    let elementosUl = document.getElementById("elementos");
    
    miArray.forEach(function(elemento) {
      let li = document.createElement("li");
      li.textContent = elemento;
      elementosUl.appendChild(li);
      console.log()
    });


    console.log(miArray);


    console.log('%c-------------------------- Punto FIN 06 -------------------------- ', 'background: pink; color: black');
}




function limpiar() {
  let elementosUl = document.getElementById("elementos");
  elementosUl.innerHTML = ""; // Limpiamos la lista
   
  }