

const obtenerCliente = () =>{
    return () => {console.log('Bicri')}
}

const fn = obtenerCliente();

fn();