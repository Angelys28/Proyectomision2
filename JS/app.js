const inpNombre = document.getElementById('Nombre');
const inpNota1 = document.getElementById('nota1');
const inpNota2 = document.getElementById('nota2');
const inpNota3 = document.getElementById('nota3');
const tablaResultado = document.getElementById('tablaResultado').querySelector('tbody');
let estudiantes = [];

if (localStorage.getItem("estudiantes") !== null) {
    estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
    estudiantes.forEach(est => agregarFila(est));
}

function guardar() {
    let nombre = inpNombre.value.trim();
    let nota1 = parseFloat(inpNota1.value);
    let nota2 = parseFloat(inpNota2.value);
    let nota3 = parseFloat(inpNota3.value);

    // Validación de nombre
    if (nombre === "") {
        alert("El nombre es obligatorio.");
        return;
    }

    // Validación de notas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("Las notas deben ser números entre 0 y 10.");
        return;
    }

    let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

    let estudiante = {
        "Nombre": nombre,
        "nota1": nota1,
        "nota2": nota2,
        "nota3": nota3,
        "promedio": promedio
    };

    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    agregarFila(estudiante);

    // Limpiar los campos
    inpNombre.value = "";
    inpNota1.value = "";
    inpNota2.value = "";
    inpNota3.value = "";
}

function agregarFila(estudiante) {
    let nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `<td>${estudiante.Nombre}</td>
                           <td>${estudiante.nota1}</td>
                           <td>${estudiante.nota2}</td>
                           <td>${estudiante.nota3}</td>
                           <td>${estudiante.promedio}</td>
                           <td><button class="neu-button" onclick="eliminarEstudiante('${estudiante.Nombre}')">Eliminar</button></td>`;
    tablaResultado.appendChild(nuevaFila);
}

function eliminarEstudiante(nombre) {
    // Confirmar la eliminación
    if (confirm("¿Estás seguro de que quieres eliminar a este estudiante?")) {
        // Elimina el estudiante del array
        estudiantes = estudiantes.filter(est => est.Nombre !== nombre);
        
        // Guarda el nuevo array en localStorage
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        
        // Actualiza la tabla
        actualizarTabla();
    }
}

function actualizarTabla() {
    // Vacia la tabla
    tablaResultado.innerHTML = "";
    
    // Vuelve a agregar todas las filas
    estudiantes.forEach(est => agregarFila(est));
}

// Función para eliminar todos los estudiantes
function borrarEstudiantes() {
    // Confirmar si el usuario realmente quiere borrar todos los estudiantes
    if (confirm("¿Estás seguro de que quieres eliminar a todos los estudiantes?")) {
        // Limpia el array de estudiantes
        estudiantes = [];
        
        // Elimina los datos de localStorage
        localStorage.removeItem("estudiantes");
        
        // Actualiza la tabla para reflejar que está vacía
        actualizarTabla();
    }
}
