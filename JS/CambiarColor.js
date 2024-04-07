function cambiarModo() {
    var cuerpo = document.body;
    var modoBoton = document.getElementById("modoBoton");
    // Verifica si el cuerpo tiene la clase 'modo-claro'
    if (cuerpo.classList.contains("modo-claro")) {
        // Si está en modo claro, cambia a modo oscuro y cambia el texto del botón a ☀️
        cuerpo.classList.remove("modo-claro");
        cuerpo.classList.add("modo-oscuro");
        modoBoton.textContent = "☀️";
    } else {
        // Si está en modo oscuro, cambia a modo claro y cambia el texto del botón a 🌙
        cuerpo.classList.remove("modo-oscuro");
        cuerpo.classList.add("modo-claro");
        modoBoton.textContent = "🌙";
    }
}
