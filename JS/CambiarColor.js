function cambiarModo() {
    var cuerpo = document.body;
    // Verifica si el cuerpo tiene la clase 'modo-claro'
    if (cuerpo.classList.contains("modo-claro")) {
        // Si está en modo claro, cambia a modo oscuro
        cuerpo.classList.remove("modo-claro");
        cuerpo.classList.add("modo-oscuro");
    } else {
        // Si está en modo oscuro, cambia a modo claro
        cuerpo.classList.remove("modo-oscuro");
        cuerpo.classList.add("modo-claro");
    }
}
