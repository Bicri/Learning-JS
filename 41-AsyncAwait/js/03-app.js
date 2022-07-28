

function descargarClientes(){

    return new Promise((resolve, reject)=>{
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargo correctamemnte');
            }else{
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

//Async - await

//---- function expresion ----
const ejecutar = async ()=> {
    try {
        console.log(1+1);
        const respuesta = await descargarClientes();
        console.log(2+2);
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}
ejecutar();