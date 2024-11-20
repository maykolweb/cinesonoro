// Verificar que el navegador soporte la API de síntesis de voz
if ('speechSynthesis' in window) {
    let mensaje; // Variable para almacenar el mensaje de voz

    // Función para crear y reproducir la voz con el texto del elemento
    function leerTexto(event) {
        // Verificar si el evento se disparó sobre un elemento h1, label o li
        const tagName = event.target.tagName.toLowerCase();
        if (tagName === 'h1' || tagName === 'h2' || tagName === 'label' || tagName === 'li' || tagName === 'a' || tagName === 'button' || tagName === 'div' || tagName === 'p') {
            // Detener cualquier síntesis de voz en progreso
            window.speechSynthesis.cancel();

            // Crear nuevo mensaje de voz con el texto del elemento
            mensaje = new SpeechSynthesisUtterance(event.target.innerText);
            mensaje.lang = "es-ES"; // Configuración del idioma
            mensaje.voice = speechSynthesis.getVoices().find(voice =>
                voice.name.includes("Google español (España) masculino") || voice.name.includes("Microsoft Pablo")
            );

            // Reproducir el mensaje de voz
            window.speechSynthesis.speak(mensaje);
        }
    }

    // Función para reproducir el mensaje de bienvenida
    function bienvenida() {
        const bienvenidaMensaje = new SpeechSynthesisUtterance("Bienvenidos a CineSonoro, Tu plataforma de streaming inclusiva");
        bienvenidaMensaje.lang = "es-ES"; // Configuración del idioma
        bienvenidaMensaje.voice = speechSynthesis.getVoices().find(voice =>
            voice.name.includes("Google español (España) masculino") || voice.name.includes("Microsoft Pablo")
        );
        window.speechSynthesis.speak(bienvenidaMensaje);
    }

    // Reproducir el mensaje de bienvenida al cargar la página
    window.onload = bienvenida;

    // Agregar el evento de mouseover a todos los elementos del cuerpo
    document.body.addEventListener("mouseover", leerTexto, true);

    // Función para manejar atajos de teclado y reproducir voz
    function manejarAtajo(selector, texto) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            elemento.focus();
            // Crear mensaje de voz para el texto especificado
            const mensajeAtajo = new SpeechSynthesisUtterance(texto);
            mensajeAtajo.lang = "es-ES"; // Configuración del idioma
            mensajeAtajo.voice = speechSynthesis.getVoices().find(voice =>
                voice.name.includes("Google español (España) masculino") || voice.name.includes("Microsoft Pablo")
            );
            // Reproducir el mensaje de voz
            window.speechSynthesis.speak(mensajeAtajo);
        }
    }

// Agregar atajos de teclado
    document.addEventListener('keydown', function (event) {
        const keyName = event.key;
        if (keyName === '1') {
            manejarAtajo('nav ul li a[tabindex="1"]', 'Inicio');
        } else if (keyName === '2') {
            manejarAtajo('nav ul li a[tabindex="2"]', 'Suscripcion');
        } else if (keyName === '3') {
            manejarAtajo('nav ul li a[tabindex="3"]', 'Peliculas');
        } else if (keyName === '4') {
            manejarAtajo('nav ul li a[tabindex="4"]', 'Series');
        } else if (keyName === '5') {
            manejarAtajo('#destacado h2', 'Destacado');
        } else if (keyName === '6') {
            manejarAtajo('.contenido[tabindex="6"]', 'Película 1');
        } else if (keyName === '7') {
            manejarAtajo('.contenido[tabindex="7"]', 'Película 2');
        } else if (keyName === '8') {
            manejarAtajo('.contenido[tabindex="8"]', 'Película 3');
        } else if (keyName === '9') {
            manejarAtajo('.degradado[tabindex="9"]', 'Botón 1');
        } else if (keyName === '0') {
            manejarAtajo('.degradado[tabindex="10"]', 'Botón 2');
        } else if (keyName === 'F5') {
            bienvenida();
        }
    });

} else {
        console.log("API de síntesis de voz no soportada en este navegador.");
    }


// FUNCION JAVASCRIT PARA MENU HAMBURGUESA
function toggleMenu() { 
    const navLinks = document.querySelector('nav ul'); 
    const loginButton = document.getElementById('loginButton'); 
    navLinks.classList.toggle('show'); 
    loginButton.classList.toggle('show'); 
}

function abrirModal(titulo, videoUrl, descripcion) { 
    document.getElementById('modal-titulo').textContent = titulo; 
    document.getElementById('modal-video').src = videoUrl; 
    document.getElementById('modal-descripcion').textContent = descripcion; 
    document.getElementById('modal').style.display = 'flex'; 
} 
    
function cerrarModal() { 
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-video').src = ''; // Detener el video 
}

// Agregar el evento para cerrar el modal con la tecla de escape 
document.addEventListener('keydown', function(event) { 
    if (event.key === 'Escape') { 
        cerrarModal(); 
    } 
});

