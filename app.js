document.addEventListener('DOMContentLoaded', () => {
    // Referencia al contenedor de la bandera
    const flagContainer = document.querySelector('.flag-container');
    const coatOfArms = document.querySelector('.coat-of-arms');

    // Animación inicial del escudo al cargar la página
    if (coatOfArms) {
        coatOfArms.style.opacity = '0';
        coatOfArms.style.transform = 'scale(0.8)';
        setTimeout(() => {
            coatOfArms.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
            coatOfArms.style.opacity = '1';
            coatOfArms.style.transform = 'scale(1)';
        }, 100);
    }

    // Interacción al pasar el mouse sobre la bandera
    if (flagContainer) {
        flagContainer.addEventListener('mouseover', () => {
            flagContainer.style.animationDuration = '4s'; // Ondeará más rápido (4 segundos)
        });

        // Volver a la animación original al quitar el mouse
        flagContainer.addEventListener('mouseout', () => {
            flagContainer.style.animationDuration = '8s'; // Vuelve a la velocidad normal (8 segundos)
        });
    }

    console.log("Interacción de la bandera cargada.");
});
