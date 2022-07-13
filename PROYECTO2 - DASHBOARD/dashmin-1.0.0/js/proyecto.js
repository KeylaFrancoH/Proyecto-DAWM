
var contenido = document.querySelector('#contenido');
var selecc = document.getElementById('select-primary');
var chart = document.getElementById('select-duration');
var foto = document.getElementById('portada');
var selector = document.querySelector('#bodycard');
var busqueda = document.getElementById('buscar');
const ctx = document.getElementById('myChart').getContext('2d');
const ctx_select = document.getElementById('myChart2').getContext('2d');
var nombres = []
var urls = [];
var description = [];
var scores = [];
var duracion = [];
var table = document.getElementById("tabla").tBodies[0];


let URL = 'https://ghibliapi.herokuapp.com/films/'
fetch(URL)
    .then(respuesta => respuesta.json())
    .then(datos => {
        seleccionar_film(datos);
        cargar_listas(datos);
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
        titulos += ` 
        <option value="${cont}">${valor['title']}</option>
        `
        cont++;
    }
    selecc.innerHTML = titulos
}


selecc.addEventListener('change', (event) => {
    for (let index = 0; index < urls.length; index++) {
        if (selecc.selectedIndex == index) {
            foto.src = urls[index - 1]
            foto.alt = nombres[index - 1]
            selector.textContent = description[index - 1]
        }
    }

});

function cargar_listas(datos) {
    for (valor of datos) {
        urls.push(valor['image']);
        nombres.push(valor['title'])
        description.push(valor['description'])
        scores.push(valor['rt_score'])
        duracion.push(valor['running_time'])
    }
}

function chart_info() {

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: nombres.slice(0, 10),
            datasets: [{
                label: 'score de las películas',
                data: scores.slice(0, 10),
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
}


chart.addEventListener('change', (event) => {

    const myChart2 = new Chart(ctx_select, {
        type: 'bar',
        data: {
            labels: nombres.slice(0, 22),
            datasets: [{
                label: 'Duración de las películas en minutos',
                data: duracion.slice(0, 22),
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
    

    if(chart.value == "2"){
       
        myChart2.data.datasets[0]['labels'] = nombres.slice(0,2);
        myChart2.data.datasets[0]['data'] = duracion.slice(0,2);
        console.log(myChart2.data.datasets[0]['data'])
        myChart2.update();
        
    }
    if(chart.value == "5"){
        myChart2.data.datasets[0]['labels'] = nombres.slice(0,5);
        myChart2.data.datasets[0]['data'] = duracion.slice(0,5);
        console.log(myChart2.data.datasets[0]['data'])
        myChart2.update();
    }
    if(chart.value == "10"){
        myChart2.data.datasets[0]['labels'] = nombres.slice(0,10);
        myChart2.data.datasets[0]['data'] = duracion.slice(0,10);
        console.log(myChart2.data.datasets[0]['data'])
        myChart2.update();
    }
    if(chart.value == "22"){
        myChart2.data.datasets[0]['labels'] = nombres.slice(0,22);
        myChart2.data.datasets[0]['data'] = duracion.slice(0,22);
        console.log(myChart2.data.datasets[0]['data'])
        myChart2.update();
    }
    


});