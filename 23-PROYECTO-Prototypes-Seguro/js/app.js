
function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//realizar cotizzacion con los datos
Seguro.prototype.cotizarSeguro = function (){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */

    let cantidad;
    const base = 2000;

   switch(this.marca){

    case '1':
        cantidad = base * 1.15;
        break;
    case '2':
        cantidad = base * 1.05
        break;
    case '3':
        cantidad = base * 1.35;
        break;
    default:
        break;
   }

   //leer a diferencia | Cada año de diferencia se reduce un 3% el valor del seguro
   const diferencia = new Date().getFullYear() - 2012;

   cantidad -= ((diferencia*3)*cantidad) / 100;

   /*
        si el seguro es basico se multiplica por un 30% mas
        si el seguro es completo se multiplica por un 50% mas
   */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }

    return cantidad;
}

function UI (){

}

//llenar años al cargar
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 22;
    
    const selectYear = document.querySelector('#year');

    for(let i=max; i>min; i-- ){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        selectYear.appendChild(opcion);
    }
}

//mostrar mensajes de formulario 
UI.prototype.mostrarMensaje = function (mensaje, tipo){
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //insertar html
    const formuario = document.querySelector('#cotizar-seguro');
    formuario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(()=>{
        div.remove();
    }, 3000);

}

UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca, year, tipo} = seguro;

    let textoMarca;
    switch (marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca} </span> </p>
        <p class="font-bold">Año: <span class="font-normal">  ${year} </span> </p>
        <p class="font-bold">Tipo: <span class="font-normal">  ${tipo} </span> </p>
        <p class="font-bold">Total: <span class="font-normal"> $ ${total} </span> </p>

    `;

    const resultadoDiv = document.querySelector('#resultado');
    

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(()=>{
        spinner.style.display = 'none'; //Borra spinner, muestra resultado
        resultadoDiv.appendChild(div);
    },3000)
}

//Instanciando UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', ()=>{
    ui.llenarOpciones();
})

eventListeners();
function eventListeners(){

    const formuario = document.querySelector('#cotizar-seguro');
    formuario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //leer marca
    const marca = document.querySelector('#marca').value;

    //leer anio
    const year = document.querySelector('#year').value;

    //leer el tipo
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }

    //instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);

    //utilizar el prototype
    const total = seguro.cotizarSeguro();

    //mostrar resultado
    ui.mostrarResultado(total, seguro);
}