//Variables
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const year = document.querySelector('#year');

//Contenedor de resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max-12;

//Generar objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    transmision: '',
    color: ''
}

//Eventos

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos);

    llenarSelect();
});


//Event listener para los select de busqueda
marca.addEventListener('change', (e)=>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

minimo.addEventListener('change', (e)=>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', (e)=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', (e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', (e)=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})

//Funciones

function mostrarAutos(arregloDeAutos){

    limpiaContenido();

    arregloDeAutos.forEach(auto => {

        const   {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - ${year}
            Precio: ${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    });
}

//Limpiar html
function limpiaContenido(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
    for(let i=max; i>=min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//Filtro de busqueda
function filtrarAuto(){
    const filtrado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if(filtrado.length){
        mostrarAutos(filtrado);
    }else{
        noResultado();
    }

}

function noResultado(){
    
    limpiaContenido();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados con esa combinación';

    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}