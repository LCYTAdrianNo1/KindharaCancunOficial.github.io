        let deferredPrompt;
        let installPromptShown = false;

        // Captura el evento beforeinstallprompt
        window.addEventListener('beforeinstallprompt', (event) => {
            // Previene que el navegador muestre automáticamente el mensaje de instalación
            event.preventDefault();
            // Guarda el evento para mostrar el mensaje de instalación posteriormente
            deferredPrompt = event;

            // Si el mensaje de instalación no se ha mostrado antes, lo muestra
            if (!installPromptShown) {
                showInstallPrompt();
            }
        });

        // Función para mostrar el mensaje de instalación
        function showInstallPrompt() {
            // Muestra el mensaje de instalación solo si deferredPrompt está disponible
            if (deferredPrompt) {
                // Cambia el estado de instalación para evitar que se muestre nuevamente
                installPromptShown = true;

                // Agrega un event listener al botón para mostrar el mensaje de instalación
                document.getElementById('installButton').addEventListener('click', () => {
                    // Muestra el mensaje de instalación
                    deferredPrompt.prompt();
                    // Espera a que el usuario responda al mensaje de instalación
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('Usuario aceptó instalar la aplicación');
                        } else {
                            console.log('Usuario canceló la instalación de la aplicación');
                        }
                        // Limpia el evento para que no se muestre nuevamente el mensaje de instalación
                        deferredPrompt = null;
                    });
                });
            }
        }
