function abrirModal(elemento) {
    // Obtener la URL de la imagen clicada y su título
    var modal = document.getElementById("modal");
    var imagenModal = document.getElementById("imagenModal");
    var modalTitulo = document.getElementById('staticBackdropLabel');

    // Asignar la URL de la imagen al modal
    imagenModal.src = elemento.src;

    // Asignar el título de la imagen al modal
    modalTitulo.innerText = elemento.getAttribute('data-title');

    // Mostrar el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
