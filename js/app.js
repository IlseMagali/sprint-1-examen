var estudiantes = []; // variable glbal usable en cualquiera de las funciones

function obtenerListaEstudiantes(estudiantes) {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

// funcion constructora para definir la clase estudiante, como funcion pueden usarla otras funciones
//funciona como un molde, de este pueden hacerse muchos objetos, constructora de objetos
/*function Estudiante(nombreDelEstudiante, puntosTecnico, puntosHabilidades) {
  this.nombreDelEstudiante = nombreDelEstudiante;
  this.puntajeTecnico = puntosTecnicos;
  this.puntajeHseEstudiante = puntosHabilidades;
};*/


function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiantes
    var nombreDelEstudiante = prompt("Por favor, Ingresa tu nombre");
    var puntosTecnicos = parseInt(prompt("Por favor, Ingresa tus puntos técnicos"));
    var puntosHabilidades = parseInt(prompt("Por favor, Ingresa tus puntos HSE"));
    /*----------- Declaracion del objeto literal: --------------*/
    var padawan = { // es uno, es literal, solo creas un objeto
      "nombreDelEstudiante": nombreDelEstudiante,
      "puntosTecnicos" : puntosTecnicos,
      "puntosHabilidades" : puntosHabilidades
    };
    /*----------- Fin declaracion del objeto literal: --------------*/

    /*----------- La funcion estudiante recurre a lo siguiente: --------------*/
    // pasamos los parametros de la clase estudiante para crear el objeto alumno, que irá al arreglo estudiantes.
    //var padawan = new Estudiante(nombreDelEstudiante, puntosTecnicos, puntosHabilidades);
    // console.log(padawan) para comprobar la existencia del padawan
    /*----------- La funcion estudiante recursos fin --------------*/

    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    estudiantes.push(padawan);

    // TO DO: Retornar el estudiante recientemente creado
    return padawan;

}


function mostrar(estudiante) { // sirve para un estudiante
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreDelEstudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHabilidades + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)

    var estudiantesHtml = ""; // este string vacío sirve para resguardar el padawan 1


    for (var i = 0;  i < estudiantes.length; i++) {
      // reutiliza la funcion mostrar porque necesitamos presentar el html por cada padawan
      estudiantesHtml += mostrar(estudiantes[i]); // la funcion mostrar tiene todo lo bonito del html, se concatena para agregarlo por cada estudiante
      // estudiantesHtml = estudiantesHtml + mostrar(estudiantes[i]) esto es concatenarlo igual que arriba pero escrito de manera distinta
    }


    //En este caso, forEach va a comparar por cada elemento dentro del arreglo

    /*estudiantes.forEach(function(padawan) {
      estudiantesHtml += mostrar(padawan)
    });*/


    // Retornar el template de todos los estudiantes
    return estudiantesHtml;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    var estudiantesFiltrados = estudiantes.filter(function(nombre) {
      estudiantes[i].nombre.toLowerCase() == nombreDelEstudiante.toLowerCase();
    });
    // Retornar el objeto del estudiante buscado
    return estudiantesFiltrados;
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenadoPorPuntajeTecnico = estudiantes.sort(function(itemA, itemB){
      itemB.estudiantes.puntosTecnicos - itemA.estudiantes.puntosTecnicos;
    });

    return ordenadoPorPuntajeTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenadoPorPuntajeHabilidades = estudiantes.sort(function(itemA, itemB){
      itemB.estudiantes.puntosHabilidades - itemA.estudiantes.puntosHabilidades;
    });

    return ordenadoPorPuntajeHabilidades;
}
