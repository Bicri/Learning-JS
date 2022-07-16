

const url = 'https://picsum.photos/list';

const cargarAPI = document.querySelector('#cargarAPI');

cargarAPI.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    fetch(url)
        .then(resolve => {
            return resolve.json();
        })
        .then(resolve => mostrarHTML(resolve))
}

function mostrarHTML(datos){
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const {author, post_url} = perfil;
        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>  <br>
        `;
    });

    contenido.innerHTML = html; 
}