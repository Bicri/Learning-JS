

const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', ()=>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    //validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        //hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    //Consultar API
    consultarAPI(ciudad, pais);
}

function consultarAPI(ciudad, pais){
    const appID = "3987923de883bac428ce5a7a678c468c";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    spinner();
    fetch(url)
        .then(resolve => {
            return resolve.json();
        })
        .then( resolve => {
            limpiarHTML();
            if(resolve.cod==="404"){
                mostrarError("Ciudad no encontrada");
                return
            }
            //Si existe
            mostrarClima(resolve);
        })

}

function mostrarClima(datos){
    const {name, main: { temp, temp_max, temp_min }} = datos;
    
    const celsius = kelvinToCelsius(temp)
    const max = kelvinToCelsius(temp_max)
    const min = kelvinToCelsius(temp_min)

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en: ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl')
    
    const actual = document.createElement('p');
    actual.innerHTML = `${celsius} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Max: ${max} &#8451;`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Min: ${min} &#8451;`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

function kelvinToCelsius(gradosK){
    return (gradosK - 273.15).toFixed(2);
}

function mostrarError(mensaje){
    //crear alerta
    if(!document.querySelector('.bg-red-100')){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-red-100','border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block">${mensaje}</span>`;
        
        container.appendChild(alerta);

        //eliminar alerta
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner(){
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-cube-grid');
    divSpinner.innerHTML = `
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
    `;

    resultado.appendChild(divSpinner);

}