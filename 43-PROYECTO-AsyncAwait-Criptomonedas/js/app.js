

const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const divResultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

//Crear un promise
const obtenerCriptomonedas = criptomonedas => {
    return new Promise(resolve => {
        resolve(criptomonedas);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

async function consultarCriptomonedas(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    // fetch(url)
    //     .then(resolve => {
    //         return resolve.json();
    //     })
    //     .then(resultado => {
    //         return obtenerCriptomonedas(resultado.Data);
    //     })
    //     .then( criptomonedas => {
    //         selectCriptomonedas(criptomonedas);
    //     })

    try {
        const resolve = await fetch(url);
        const resultado = await resolve.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);
    } catch (error) {
        console.log(error);
    }
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e){
    e.preventDefault();


    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda===''){
        mostrarAlerta('Ambos campos son requeridos');
        return;
    }

    //consultar la api con los resultados
    consultarAPI();
}

function mostrarAlerta(msg){

    if(!document.querySelector('.error')){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = msg;
    
        formulario.appendChild(divMensaje);
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    // fetch(url)
    //     .then(resolve => resolve.json())
    //     .then(cotizacion => {
    //         mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    //     })

    try {
        const peticion = await fetch(url);
        const respuesta = await peticion.json();
        mostrarCotizacionHTML(respuesta.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error);
    }
    
}

function mostrarCotizacionHTML(cotizacion){
    limpiarHTML()
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio mas alto del día: <span>${HIGHDAY}</span>`;

    const precioBAJO = document.createElement('p');
    precioBAJO.innerHTML = `Precio mas bajo del día: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Última Actualización: <span>${LASTUPDATE}</span>`;

    divResultado.appendChild(precio);
    divResultado.appendChild(precioAlto);
    divResultado.appendChild(precioBAJO);
    divResultado.appendChild(ultimasHoras);
    divResultado.appendChild(ultimaActualizacion);
}

function limpiarHTML()
{
    while(divResultado.firstChild){
        divResultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>    
        <div class="bounce3"></div>
    `;

    divResultado.appendChild(spinner);
}