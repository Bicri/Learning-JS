

//Closure

//Hacer disponiblke un valor fuera de su scope

// const cliente = 'Bicri';

// function mostrarCliente(){
//     const cliente = 'Isaac';

//     console.log(cliente)
// }

// mostrarCliente();

// console.log(cliente);

const obtenerCliente = () => {
    const nombre = "Bicri";

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();


