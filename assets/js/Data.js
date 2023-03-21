
let dataamazing=[];

async function getData(){
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(respuesta => respuesta.json())
  .then(json => data=json)
  localStorage.setItem("data",JSON.stringify(data))
} 

getData();

let data=localStorage.getItem("data");
  data = JSON.parse(data);
console.log(data);



  function createcard (event){
    return `<div class="card" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-index_titulo centrado subrayado" style>${event.name}</h3>
    <p class="texto-arial centrado subrayado">${event.description}</p>
    <p class="texto-negrita texto-alado">Fecha:&nbsp;</p><p class="texto-alado"> ${event.date}</p><br />
    <p class="texto-negrita texto-alado">Categoria:&nbsp;</p><p class="texto-alado">${event.category}</p><br />
    <p class="texto-negrita texto-alado">Precio:&nbsp;$&nbsp;</p><p class="texto-alado " style=" font-size: 1em;" >${event.price}</p>
    <a href="./tarjeta.html?id=${event._id}" class="btn btn-primary">Más Info...</a>
    </div>
    </div>`
    

  }


  
let categories = [];
data.events.forEach(evento => {
  if (!categories.includes(evento.category)){
    categories.push(evento.category)
  }
});
console.log(categories); 
