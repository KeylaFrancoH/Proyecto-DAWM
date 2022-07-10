
var contenido = document.querySelector('#contenido');
var selecc = document.getElementById('select-primary');
var foto = document.getElementById('portada');
var selector = document.querySelector('#bodycard');
var busqueda = document.getElementById('buscar');
var table = document.getElementById("tabla").tBodies[0];
console.log(table)

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
        foto.src = `${valor['image']}`
        selector.textContent = `${valor['description']}`
    }
    selecc.innerHTML = titulos
    

}

buscaTabla = function(){
    texto = busqueda.value.toLowerCase();
    var r=0;
    while(row = table.rows[r++])
    {
      if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
        row.style.display = null;
      else
        row.style.display = 'none';
    }
  }

  busqueda.addEventListener('keyup', buscaTabla);