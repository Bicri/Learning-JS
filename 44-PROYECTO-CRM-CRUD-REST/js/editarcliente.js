

import { obtenerCliente, editarCliente} from './API.js';
import {mostrarAlerta, validarObj} from './funciones.js';

(function(){

    //Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id'); 


    document.addEventListener('DOMContentLoaded', async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        //submit al form
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        };

        if(validarObj(cliente)){
            mostrarAlerta('Todos los campos son requeridos');
            return;
        }

        //Reescribe el objeto
        editarCliente(cliente);

    }

    function mostrarCliente(cliente){
        const {nombre, email, empresa, telefono, id} = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        idInput.value = id;
    }


})();