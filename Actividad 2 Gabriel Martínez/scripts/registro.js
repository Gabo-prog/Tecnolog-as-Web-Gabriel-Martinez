// Gestión del registro de usuarios
const users = [];

// Función para registrar un usuario
const registerUser = (event) => {
    event.preventDefault();

    // Obtener los valores del formulario
    const id = document.getElementById('id').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    // Validar que todos los campos estén completos
    if (!id || !cedula || !nombre || !fechaNacimiento || !ciudad) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Crear un objeto usuario y agregarlo al array
    const newUser = { id, cedula, nombre, fechaNacimiento, ciudad };
    users.push(newUser);

   
    // Redirigir a la página que muestra los datos registrados
    const params = new URLSearchParams({
        id,
        cedula,
        nombre,
        fechaNacimiento,
        ciudad
    }).toString();

    window.location.href = `ver-registro.html?${params}`;

    // Limpiar el formulario
    document.getElementById('userForm').reset();
};



// Asignar evento al botón de registro
document.getElementById('userForm').addEventListener('submit', registerUser);
