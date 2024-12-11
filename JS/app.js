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
    let nombre = inpNombre.value;
    let nota1 = parseFloat(inpNota1.value) || 0;
    let nota2 = parseFloat(inpNota2.value) || 0;
    let nota3 = parseFloat(inpNota3.value) || 0;
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
                                <td>${estudiante.promedio}</td>`;
    tablaResultado.appendChild(nuevaFila);
}