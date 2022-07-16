
//variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');

const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas{

    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas)
    }

    eliminarCita(id){
        this.citas = this.citas.filter((cita) => cita.id !== id);
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
    }
}

class UI{

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(tipo === 'error'){
            divMensaje.classList.remove('alert-success');
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.remove('alert-danger');
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        setTimeout(()=>{
            divMensaje.remove();
        },3000);
    }

    imprimirCitas({citas}){

        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}

            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefóno: </span> ${telefono}
                
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha}
                
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora}
                
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span> ${sintomas}
                
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>`;

            btnEliminar.onclick = ()=>{eliminarCita(id)}

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info', 'mr-2');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>`;

            btnEditar.onclick = () => {cargarEdicion(cita)};

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

//event listeners
eventListeners()
function eventListeners(){

    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit',nuevaCita);
}


//objeto
const citaObj = {
    mascota: "",
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//funciones
function datosCita(e){
    citaObj[e.target.name] = e.target.value;

}

function nuevaCita(e){
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if(mascota === '' || propietario === '' || telefono==='' || fecha === '' || hora === '' || sintomas === '')
    {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando){

        ui.imprimirAlerta('Editado correctamente', 'correcto');

        administrarCitas.editarCita({...citaObj});

        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    }else{
        //generar un ID unico
        citaObj.id = Date.now();

        //creando cita
        administrarCitas.agregarCita({...citaObj});

        ui.imprimirAlerta('Se agregó correctamente', 'correcto');
    }


    formulario.reset();

    reiniciarObj();

    //MOstrar la cita
    ui.imprimirCitas(administrarCitas);

}

function reiniciarObj(){
    
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
    citaObj.id = '';
}

function eliminarCita(id){
    //Eliminar las citas
    administrarCitas.eliminarCita(id);

    //Mostrar mensaje
    ui.imprimirAlerta('Cita eliminada correctamente', 'exito');

    //Refrescar citas
    ui.imprimirCitas(administrarCitas);
}

function cargarEdicion(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    //cambiar boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    editando = true;

}