window.addEventListener("load", () => {
     
    var imagenes = document.querySelectorAll("#fotos img"); // Creo array imagenes
    var containerVacio = document.getElementById("contenedorVacio");
    var fotitoBig = document.createElement("img"); // Creo elemento imagen
    fotitoBig.classList.add("fotogrande"); // Llamo a clase para mostrar fotos grandes

/* Funcion que por cada vez que haga clic en imagen recoge el valor de su source */
    var mostrarGrande = (m) => {
          switch(m.target.id) {
              case "coliseo":cambioImagen(coliseo.getAttribute("src"));
                ;break;
              case "torreEiffel":cambioImagen(torreEiffel.getAttribute("src"));  
                ;break;
              case "elatomium":cambioImagen(elatomium.getAttribute("src"));
                ;break;
              case "tajMahal":cambioImagen(tajMahal.getAttribute("src"));  
                ;break;
              case "granReloj":cambioImagen(granReloj.getAttribute("src"));
                ;break;
             case "estatua":cambioImagen(estatua.getAttribute("src"));  
                ;break;
          }
    }

  /* Funcion que voy a llamar por cada imagen seleccionada, la cual me la muestra grande*/
   var cambioImagen = (obtenersource) => {
         containerVacio.appendChild(fotitoBig); // Añado la imagen creada al contenedor
         var fuente = obtenersource; // Recogo el valor del source de cada imagen selecciona
         fotitoBig.setAttribute("src", fuente); // Y vuelco el valor del source a la foto grande
    }

  /* Por cada vez que haga clic en una imagen llama a una funcion que obtiene el valor del source */
    imagenes.forEach((i) => {
        i.addEventListener("click", mostrarGrande);
    });

});