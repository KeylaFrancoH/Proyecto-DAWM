
var contenido = document.querySelector('#contenido')
let URL = 'https://ghibliapi.herokuapp.com/films/'


    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
            mostrarDatos(datos);
        })


function mostrarDatos(datos) {
    let body = ""
            for (var i = 0; i < datos.length; i++) {      
               body+=`<tr>
               <th scope="col">${datos[i].title}</th>
               <th scope="col">${datos[i].original_title}</th>
               <th scope="col">${datos[i].producer}</th>
               <th scope="col">${datos[i].director}</th>
               <th scope="col">${datos[i].rt_score}</th>
           </tr>`
            }
            document.getElementById('contenido').innerHTML = body
}

