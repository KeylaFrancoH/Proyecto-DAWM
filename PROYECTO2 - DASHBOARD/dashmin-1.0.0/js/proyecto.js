
var contenido = document.querySelector('#contenido')
var selecc = document.getElementById('select-primary')
var selector_foto = document.getElementById('portada')
var selector = document.querySelector('#bodycard')
let URL = 'https://ghibliapi.herokuapp.com/films/'

fetch(URL)
    .then(respuesta => respuesta.json())
    .then(datos => {
        mostrarDatos(datos)
        seleccionar_film(datos)
    })
    .catch(console.error);


function mostrarDatos(datos) {

    let body = ""
    for (var i = 0; i < datos.length; i++) {
        body += `<tr>
           <th scope="col"><input class="form-check-input" type="checkbox"></th>
           <th scope ="col">${datos[i].release_date}</th>
           <th scope="col">${datos[i].title}</th>
           <th scope="col">${datos[i].original_title}</th>
           <th scope="col">${datos[i].producer}</th>
           <th scope="col">${datos[i].director}</th>
           <th scope="col">${datos[i].rt_score}</th>
       </tr>`
    }
    contenido.innerHTML = body

}

function seleccionar_film(datos) {
    let titulos = "<option selected>Seleccione el nombre de una película</option>"
    for (valor of datos) {
        titulos += ` <option value="">${valor['title']}</option> `
    }
    selecc.innerHTML = titulos
    selector_foto.src = `${valor['image']}`
    selector.textContent = `${valor['description']}`

}
