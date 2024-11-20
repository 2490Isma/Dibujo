document.addEventListener('DOMContentLoaded', iniciarFormulario);
// funcion para escuchar un evento
function iniciarFormulario() {
    const form = document.getElementById('registration-form'); // toma el formulario por id
    if (form) {
        form.addEventListener('submit', enviarDatos); // asocia el evento 'submit' al formulario
    }
}

//funcion para enviar datos

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // valores del formulario
    const preferido = document.getElementById('preferido').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
   
    // objeto con los datos
    const data = { preferido };
    console.log(data);  // Mostrar los datos en la consola

    // Enviar los datos al servidor
    fetch('/logueo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Asegúrate de que es JSON
        },
        body: JSON.stringify(data), // Convertir el objeto en una cadena JSON
    })
    .then(preferido => {
        if (!preferido.ok) {
            throw new Error('No ha seleccionado el preferido');
        }
        return response.text();
    })
    .then(data => {
        window.location.href = '/bienvenido';
    })
    .catch(error => {
        mostrarErrorModal(error.message);
    });

 // Función para mostrar el modal con el error
function mostrarErrorModal(mensaje) {
    const modal = document.getElementById('miModal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = mensaje;
    modal.style.display = 'block'; // Mostrar el modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('miModal');
    modal.style.display = 'none'; // Ocultar el modal
}


function volver() {
    window.history.back();
}

    }
