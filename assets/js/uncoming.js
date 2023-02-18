// En el archivo home.js
const eventCardsContainer = document.getElementById("event-cards");
const eventsData = data.events; // Agregar esta línea

// Convertir las fechas de string a objetos Date
for (let i = 0; i < eventsData.length; i++) {
  eventsData[i].date = new Date(eventsData[i].date);
}

// Ordenar los eventos por fecha de manera descendente
eventsData.sort((a, b) => b.date - a.date);

// Generar una tarjeta para cada evento en eventsData
for (let i = 0; i < eventsData.length; i++) {
  const event = eventsData[i];

  // Omitir eventos cuya fecha es anterior a la actual
  if (event.date < new Date()) {
    continue;
  }

  // Crear una plantilla de cadena para la tarjeta
  const cardTemplate = `
    <div class="col">
      <div class="card h-100 shadow-sm border-success secciones-accion">
        <img class="card-img-top card-img-fixed" src="${event.image}" alt="Thumbnail">
        <div class="card-body">
          <h5 class="card-title text-center">${event.name}</h5>
          <p class="card-text">${event.description}</p>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">Price: $${event.price}</small>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-secondary border-success">Ver Mas...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Agregar la tarjeta al contenedor
  eventCardsContainer.innerHTML += cardTemplate;
}
