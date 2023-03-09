const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const eventos = data.events.find((event) => event._id == id);

const cardEvent = document.querySelector(".pagevent");
cardEvent.innerHTML = `<div class="cardevent">
    <div class="card mb-3" style="max-width: 680px;">
<div class="row g-0">
  <div id="image" class="col-md-4">
    <img src="${eventos.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div id="texto" class="col-md-8">
    <div class="card-body">
      <h5 class="text-center font-weight-bold">${eventos.name}</h5>
      <p class="text-justify">${eventos.description}</p>
      <p class="texto-arial font-weight-bold">Fecha: ${eventos.date}</p>
      <p class="texto-arial font-weight-bold">Categoria: ${eventos.category}</p>
      <p class="texto-arial">Sala: ${eventos.place}</p>
      <p class="texto-arial">Capacidad: ${eventos.capacity} -  Asistencia: ${eventos.assistance} </p>
      <p class="texto-arial font-weight-bold">Precio: $${eventos.price}</p>
    </div>
  </div>
</div>
</div>
</div>`;


