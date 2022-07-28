

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}
function descargarNuevosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

// const app = async () =>{
//     try {
//         const clientes = await descargarNuevosClientes();
//         console.log(clientes);

//         //La siguiente lineas se bloquean por la petición anterior
//         const pedidos = await descargarNuevosPedidos();
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error);
//     }
// }
const app = async () =>{
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);

        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}
app();