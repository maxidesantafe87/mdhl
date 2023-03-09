
  fetch('../assets/php/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

    fetch('../assets/php/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;
    });

