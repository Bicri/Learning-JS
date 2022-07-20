

import * as UI from './interfaz.js';


/*export*/ class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;

    }

    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(resolve => {       
                return resolve.json();
            })
            .then (resultado => {
                
                if(resultado.lyrics){
                    const {lyrics} = resultado;
    
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `${this.artista} - ${this.cancion}`;
                }else{
                    UI.divMensajes.textContent = `No se pudo encontrar la canción`;
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                        UI.divMensajes.textContent = "";
                        UI.divMensajes.classList.remove('error');
                    }, 3000);
                }
            })
    }
}

export default API;