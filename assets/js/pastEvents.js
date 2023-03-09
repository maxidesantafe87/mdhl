function filtroDeEventos(data) {
  const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(box => box.value);
  const buscadorDeValor = document.getElementById("search").value.trim().toLowerCase();

  const filtroDeEventos = data.events.filter(event => {
    if (checkedBoxes.length > 0 && !checkedBoxes.includes(event.category)) {
      return false;
    }

    if (buscadorDeValor.length > 0 && !(event.name.toLowerCase().includes(buscadorDeValor) || event.description.toLowerCase().includes(buscadorDeValor))) {
      return false;
    }

    const currentDate = new Date(data.currentDate);
    const eventDate = new Date(event.date);
    if (eventDate > currentDate) {
      return false;
    }

    return true;
  });

  if (filtroDeEventos.length === 0) {
    document.getElementById("cards").innerHTML = "<p>No se encontraron resultados, Por favor, intente modificando su filtro de busqueda.</p>";
    return;
  }

  document.getElementById("cards").innerHTML = filtroDeEventos.map(event => createcard(event)).join('');
}

function crearCheckbox(data) {
  const CategoriasCompletas = [...new Set(data.events.map(event => event.category))];
  const checkboxes = CategoriasCompletas.map(category => {
    return `<div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
              <label class="form-check-label" for="${category}">${category}</label>
            </div>`;
  }).join('');

  document.querySelector("div.checks").innerHTML = checkboxes;

  const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
  checkboxInputs.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      filtroDeEventos(data);
    });
  });

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup", () => {
    filtroDeEventos(data);
  });
}

filtroDeEventos(data);
crearCheckbox(data);
