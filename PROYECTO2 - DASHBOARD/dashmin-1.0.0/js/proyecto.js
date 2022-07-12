
var contenido = document.querySelector('#contenido');
var selecc = document.getElementById('select-primary');
var foto = document.getElementById('portada');
var selector = document.querySelector('#bodycard');
var busqueda = document.getElementById('buscar');
var alt =[]
var urls = [];
var description = [];
var table = document.getElementById("tabla").tBodies[0];


let URL = 'https://ghibliapi.herokuapp.com/films/'
fetch(URL)
    .then(respuesta => respuesta.json())
    .then(datos => {
        seleccionar_film(datos);
    })
    .catch(console.error);

window.addEventListener('DOMContentLoaded', (event) => {
    mostrarDatos();
});


function mostrarDatos() {
    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(datos => {
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
        })
        .catch(console.error);


}

buscaTabla = function () {
    texto = busqueda.value.toLowerCase();
    var r = 0;
    while (row = table.rows[r++]) {
        if (row.innerText.toLowerCase().indexOf(texto) !== -1)
            row.style.display = null;
        else
            row.style.display = 'none';
    }
}

busqueda.addEventListener('keyup', buscaTabla);

function seleccionar_film(datos) {
    let titulos = "<option value='' selected>Seleccione el nombre de una película</option>"
    var cont = 0;
    for (valor of datos) {
        urls.push(valor['image']);
        alt.push(valor['title'])
        description.push(valor['description'])
        titulos += ` 
        <option value="${cont}">${valor['title']}</option>
        `
        cont++;
    }
    selecc.innerHTML = titulos
}


selecc.addEventListener('change', (event) => {
    for (let index = 0; index < urls.length; index++) {
        if(selecc.selectedIndex == index){
            foto.src = urls[index-1]
            foto.alt = alt[index-1]
            selector.textContent = description[index-1]
        } 
    }
    
});






const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

