

//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto{

    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();

    }

    calcularRestante(){
        const gastado = this.gastos.reduce((acum, gasto)=> acum + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI{
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;

        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){

        //crear div
        const divMensaje = document.createElement('div');

        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(()=>{
            divMensaje.remove();
        },3000)
    }

    agregarGastoListado(gastos){
        this.limpiarHTML();

        //iterar sobre los gastos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            //crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id',id);
            nuevoGasto.dataset.id = id;

            //agregar al html
            nuevoGasto.innerHTML = `${nombre} 
            <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

            //boton de borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.onclick = () =>{
                eliminarGasto(id);
            }

            nuevoGasto.appendChild(btnBorrar);

            //boton al html
            
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const{presupuesto, restante} = presupuestoObj;
        const div = document.querySelector('.restante');
        //Comprobar 25%
        if( (presupuesto/4) > restante){
            div.classList.remove('alert-success', 'alert-warning');
            div.classList.add('alert-danger');
        }else if( (presupuesto/2) > restante ){
            div.classList.remove('alert-success');
            div.classList.add('alert-warning');
        }else{
            div.classList.remove('alert-danger', 'alert-warning');
            div.classList.add('alert-success');
        }

        if(restante<=0){
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

//instancias
let presupuesto;
const ui = new UI();

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = Number(prompt('¿Cual es tu presupuesto?'));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario<1){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <=0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida','error');
        return;
    }


    //object literal en handsmen --> mejoria del objeto literal
    const gasto = {nombre, cantidad, id:Date.now()};

    //añade gasto
    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Agregado exitosamente','exito');

    //imprimir los gastos
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);


    ui.comprobarPresupuesto(presupuesto);

    //resetear form
    formulario.reset();

}


function eliminarGasto(id){
    //elimina los gstoos del objeto
    presupuesto.eliminarGasto(id);

    //elimina los gastos del html
    const {gastos, restante} = presupuesto;
    ui.agregarGastoListado(gastos)

    ui.actualizarRestante(restante);


    ui.comprobarPresupuesto(presupuesto);
}