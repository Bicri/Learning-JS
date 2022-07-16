

const aplicarDescuento = new Promise( (resolve, reject)=>{

    const  descuento = true;
    if(descuento){
        resolve('descuento aplicado')
    }else{
        reject('No se pudo aplicar el descuento')
    }
});

aplicarDescuento
    .then(resultado => {
        descuento(resultado)
    })
    .catch((error) => {
        console.log(error);
    })

function descuento(mensaje){
    console.log(mensaje)
}

/**
 * fulfilled = promise cumplido
 * rejected = promise no se cumplió
 * pending = no se ha cumplido ni rechazado
 */