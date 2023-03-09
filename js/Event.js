const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const eventos = data.events.find((event) => event._id == id);

const cardEvent = document.querySelector(".pagevent");
cardEvent.innerHTML = `<div >
    <div class="card mb-3" style="max-width: 66%;">
<div class="row g-0">
  <div id="image" class="col-md-4">
    <img src="${eventos.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div id="texto" class="col-md-8">
    <div class="card-body">
      <h5 class="card-individual_titulo " style>${eventos.name}</h5>
      <p class="texto-arial centrado subrayado">${eventos.description}</p>
      <p class="texto-negrita texto-alado">Fecha:&nbsp;</p><p class="texto-alado"> ${eventos.date}</p><br />
      <p class="texto-negrita texto-alado">Categoria:&nbsp;</p><p class="texto-alado">${eventos.category}</p><br />
      <p class="texto-negrita texto-alado">Sala:&nbsp;</p><p class="texto-alado">${eventos.place}</p><br />
      <p class="texto-negrita texto-alado">Capacidad:&nbsp;</p><p class="texto-alado">${eventos.capacity}</p> <br> <p class="texto-negrita texto-alado">Asistencia:&nbsp;</p><p class="texto-alado">${eventos.assistance}</p><br />
      <p class="texto-negrita texto-alado">Precio:&nbsp;$&nbsp;</p><p class="texto-alado " style=" font-size: 1em;" >${eventos.price}</p>
    </div>
  </div>
</div>
</div>
</div>`;

