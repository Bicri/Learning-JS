

const cargarJSONBtn = document.querySelector('#cargarJSON');

cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    fetch('data/empleado.json')
        .then(resolve => {
            return resolve.json();
        })
        .then(resolve =>{
            mostrarHTML(resolve);
        })

}


function mostrarHTML({empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}