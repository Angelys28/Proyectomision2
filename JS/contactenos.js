document.getElementById('contacto-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const respuestaDiv = document.getElementById('respuesta');

    if (!nombre || !email || !mensaje) {
        respuestaDiv.style.color = 'red';
        respuestaDiv.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    // Simula el envío del formulario (puedes reemplazarlo con un fetch para un backend real)
    setTimeout(() => {
        respuestaDiv.style.color = 'green';
        respuestaDiv.textContent = '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.';
        document.getElementById('contacto-form').reset();
    }, 1000);
});
