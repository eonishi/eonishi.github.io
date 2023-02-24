// Detecta el evento de scroll de la ventana
window.addEventListener('scroll', function() {
    // Obtiene la distancia desde la parte superior de la ventana del navegador hasta el inicio de la barra de navegación
    var navbarOffset = document.querySelector('nav').offsetTop;
  
    // Si la distancia desde la parte superior de la ventana del navegador es menor o igual al desplazamiento actual de la ventana, agrega la clase CSS 'navbar-fixed' a la barra de navegación
    if (navbarOffset <= window.pageYOffset) {
      document.querySelector('nav').classList.add('navbar-fixed');
    } else {
      // Si no, remueve la clase CSS 'navbar-fixed'
      document.querySelector('nav').classList.remove('navbar-fixed');
    }
  });