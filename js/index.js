function mostrarTodosLosEventos(data) {
  let indexEvents = ""; 
  for (let event of data.events) {
    indexEvents += createcard(event); 
  }
  document.getElementById("cards").innerHTML = indexEvents;
}

function crearCheckbox() {
  const todosLosCheck = data.events.map(evento => evento.category); 
  const soloCategoria = [...new Set(todosLosCheck)]; 
  const inputCheck = soloCategoria.map(category => {
   
    return `<div class="form-check form-check-inline">
             <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
             <label class="form-check-label" for="${category}">${category}</label>
            </div>`;
  }).join('');
  document.querySelector("div.checks").innerHTML = inputCheck;

  const searchInput = document.getElementById("search");
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  
  function filtrarEventos() {
    const checkedBoxes = [...checkboxes].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    let filteredEvents = [];
    if (checkedBoxes.length === 0) {
      filteredEvents = data.events; 
    } else {
      filteredEvents = data.events.filter(event => checkedBoxes.includes(event.category));
    }
    const searchString = searchInput.value.trim().toLowerCase();
    const filteredEventsByNameOrDescription = filteredEvents.filter(event => `${event.name} ${event.description}`.toLowerCase().includes(searchString));
    mostrarTodosLosEventos({ events: filteredEventsByNameOrDescription }); 
    if (filteredEventsByNameOrDescription.length === 0) {
      document.getElementById("cards").innerHTML = "<p>No se encontraron resultados, Por favor, intente modificando su filtro de busqueda.</p>";
      return;
    }
  }
  
  searchInput.addEventListener("keyup", filtrarEventos);
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filtrarEventos);
  });

  filtrarEventos();
}

crearCheckbox();
