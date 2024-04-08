function openGoogleMaps() {
    // Coordenadas de destino
    var lat = 21.119406;
    var lng = -86.871926;   
    // Construir la URL de Google Maps con las coordenadas
    var url = 'https://www.google.com/maps/dir//' + lat + ',' + lng;
    // Abrir Google Maps en una nueva ventana
    window.open(url);
}
