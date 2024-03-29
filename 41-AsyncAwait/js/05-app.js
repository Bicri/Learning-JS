

const url = "https://picsum.photos/list";

document.addEventListener('DOMContentLoaded', obtenerDatos);

// function obtenerDatos(){
//     fetch(url)
//         .then(respuesta => {
//             return respuesta.json();
//         })
//         .then(respuesta => {
//             console.log(respuesta);
//         })
//         .catch(error => console.log(error));
// }

async function obtenerDatos(){
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}