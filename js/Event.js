

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const eventos = data.events.find(event => event._id == id)

const cardEvent = document.querySelector(".pagevent")
cardEvent.innerHTML = `<div class="cardevent">
    <div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div id = "image" class="col-md-4">
    <img src="${eventos.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div id = "texto" class="col-md-8">
    <div class="card-body">
      <h5 class="texto-negrita">${eventos.name}</h5>
      <p class="texto-arial">${eventos.description}</p>
      <p class="texto-arial">Date: ${eventos.date}</p>
      <p class="texto-arial texto-negrita">Category:</p><p class="texto-arial">${eventos.category}</p>
      <p class="texto-arial">Place: ${eventos.place}</p>
      <p class="texto-arial">Capacity: ${eventos.capacity} - Estimate: ${eventos.estimate} - Assistance: ${eventos.assistance} </p>
      <p class="texto-arial">Price: $${eventos.price}</p>


      
    </div>
  </div>
</div>
</div>
</div>`

