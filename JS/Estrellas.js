$(document).ready(function() {
    $(".estrella").each(function(index) {
        var estrella = $(this);
        setTimeout(function() {
            estrella.css("font-size", "24px"); // Cambia el tamaño de la estrella gradualmente
        }, 500 * index); // Cambia la velocidad de la animación ajustando este valor
    });
});
