function openGoogleMaps() {
    // Coordenadas de destino
    var lat = 21.1195184;
    var lng = -86.8730271;

    // Construir la URL de Google Maps con las coordenadas
    var url = 'https://www.google.com/maps/dir//' + lat + ',' + lng;

    // Abrir Google Maps en una nueva ventana
    window.open(url);
}
