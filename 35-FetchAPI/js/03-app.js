

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';

    fetch(url)
        .then(resolve => {
            return resolve.json();
        })
        .then(resultado => {
            mostrarHTML(resultado);
        })
}

function mostrarHTML(empleados){

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;
        console.log(`ID: ${id} - Empleado: ${nombre} - Empresa: ${empresa} - 
        Trabajo: ${trabajo}`);
    });
}