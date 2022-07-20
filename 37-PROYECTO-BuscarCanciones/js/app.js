

import * as UI from './interfaz.js';
import API from './api.js';


UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    //Obtener los datos
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        //Validando campos
        UI.divMensajes.textContent = 'Error... Todos los campos son requeridos';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = "";
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    //Consultar API
    const busqueda = new API(artista, cancion);

    busqueda.consultarAPI();
}