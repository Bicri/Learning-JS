//Variables
    const btnEnviar = document.querySelector('#enviar');
    const btnReset = document.querySelector('#resetBtn');
    const email = document.querySelector('#email');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#enviar-mail');

    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




eventListeners();
function eventListeners(){

    //Carga de aplicacion
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    btnReset.addEventListener('click',()=>{
        formulario.reset();
        iniciarApp();
    }); 

    
    //enviar email
    formulario.addEventListener('submit', enviarEmail);



}


//Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){

    //Validar campos vacios
    if(e.target.value.length > 0){
        quitarError(e);
    }else{
        pintarError(e);
    }

    //Antes de quitar definitivamente
    validarCorreo(e);

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

function quitarError(e){
    e.target.classList.remove('border-red-500');
    e.target.classList.add('border', 'border-green-500');
    const error = document.querySelector('p.error');
    if(error !== null){
        error.remove();
    }

}

function pintarError(e){
    // e.target.style.borderBottomColor = 'red';
    e.target.classList.remove('border-green-500');
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Todos los campos son obligatorios');
}

function validarCorreo(e){
    //Validar correo
    if(e.target.type === 'email'){
        
        if(er.test(e.target.value)){
            // mostrarError('El email no es válido');
            quitarError(e);
        }else{
            pintarError(e)
            mostrarError('Email no válido');
        }
    }
}

function enviarEmail(e){
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despues de 3 segundos ocultar el spinner

    //solo se ejecuta una vez
    setTimeout(() => {
        spinner.style.display = 'none';
        const parrafo = document.createElement('p');
        parrafo.textContent = "Mensaje enviado correctamente";
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'uppercase', 'font-bold')
        formulario.insertBefore(parrafo, spinner);


        setTimeout( () => {
            parrafo.remove();
            resetearForm();
            iniciarApp();
        },5000)  

    }, 3000); //en segundos


    //Se ejecuta cada X tiempo, ciclica
    // setInterval(()=>{
    //     console.log("Esta función se ejecuta cada 3 segundos");
    // }, 3000);
}


function resetearForm(){
    formulario.reset();
}