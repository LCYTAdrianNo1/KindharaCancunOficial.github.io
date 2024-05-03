// Selecciona todas las imágenes con la clase "lazy"
const lazyImages = document.querySelectorAll('.lazy');

// Crea un Intersection Observer
const lazyImageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Cuando la imagen esté a punto de volverse visible, carga la imagen real
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      // Deja de observar esta imagen para evitar cargarla más de una vez
      observer.unobserve(lazyImage);
    }
  });
});

// Observa todas las imágenes con la clase "lazy"
lazyImages.forEach(image => {
  lazyImageObserver.observe(image);
});
