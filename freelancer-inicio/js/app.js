document.addEventListener('DOMContentLoaded', () => {
    cargarPortafolio();
});

function cargarPortafolio() {
    fetch('datos.json')
        .then(response => {
            return response.json();
        })
        .then(datos => {
            let html = '';
            datos.portafolio.forEach(portafolio => {
                html += `
                    <div class="elemento">
                        <img src="img/${portafolio.id}.jpg">
                        <div class="contenido">
                            <h3>${portafolio.nombre}</h3>
                            <p>${portafolio.desc}</p>
                        </div>
                    </div>
                `;
            });
            // Una vez que hemos creado el template debemos inyectar el HTML
            document.querySelector('#listado').innerHTML = html;
        });
}