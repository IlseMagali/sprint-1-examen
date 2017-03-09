var estudiantes = [];

function obtenerListaEstudiantes(estudiantes) {
    // TO DO: Retornar la lista de estudiantes
    return (estudiantes[0] + estudiantes[1]);
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiantes
    var nombreEstudiante = prompt("Por favor, Ingresa tu nombre");
    var puntosTecnicos = parseInt(prompt("Por favor, Ingresa tus puntos técnicos"));
    var puntosHabil = parseInt(prompt("Por favor, Ingresa tus puntos HSE"));
    var longitud = estudiantes.length;

    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    for (var i = 0; i < longitud; i++) {
        var estudiante = { nombre : nombreEstudiante,
        puntosTec : puntosTecnicos, puntosHse : puntosHabil };
        estudiante.push(estudiantes);
    }

    // TO DO: Retornar el estudiante recientemente creado
    // mostrar el último estudiante agregado
    return (estudiantes);
}





function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTec + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
