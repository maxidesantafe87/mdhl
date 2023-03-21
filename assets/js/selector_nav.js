var menuAnterior = "#";
var menuPosterior = "upcoming_Event.htm";
var pagActual = window.location.pathname.split('/').pop();

if (pagActual == "index.html") {
  menuAnterior = "#";
  menuPosterior = "upcoming_Event.html";
  nombreMenu = "Home";
}
if (pagActual == "upcoming_Event.html") {
  menuAnterior = "index.html";
  menuPosterior = "PastEvents.html";
  nombreMenu = "Upcoming Events";
}
if (pagActual == "PastEvents.html") {
  menuAnterior = "upcoming_Event.html";
  menuPosterior = "Contact.html";
  nombreMenu = "Past Events";
}
if (pagActual == "Contact.html") {
  menuAnterior = "PastEvents.html";
  menuPosterior = "Stats.html";
  nombreMenu = "Contact";
}
if (pagActual == "Stats.html") {
  menuAnterior = "Contact.html";
  menuPosterior = "index.html";
  nombreMenu = "Stats";
}

if (pagActual == "tarjeta.html") {
  menuAnterior = "index.html";
  menuPosterior = "index.html";
  nombreMenu = "Detail";
}

if (pagActual == null) {
  menuAnterior = "index.html";
  menuPosterior = "index.html";
  nombreMenu = "Home";
}

document.getElementById("nombre-menu").innerHTML = nombreMenu;

document.querySelector('.selector_nav a:first-of-type').addEventListener('click', function() {
  window.location.href = menuAnterior;
});

document.querySelector('.selector_nav a:last-of-type').addEventListener('click', function() {
  window.location.href = menuPosterior;
});




