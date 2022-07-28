
//Compoisition
const obtenerNombre = (info) => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    AgregarEmail(email){
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = (info) => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostraEmpresa(){
        console.log(`Emperesa: ${info.empresa}`)
    }
})
const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`)
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}



function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}


const cliente = Cliente('Bicri', null, 'Empresa cliente');
cliente.mostrarNombre();
cliente.AgregarEmail('cliente@gmail.com')
cliente.mostrarEmail();
cliente.mostraEmpresa();

const empleado = Empleado('Isaac',  null, 'Programador');
empleado.mostrarNombre();
empleado.AgregarEmail('empelado@correo.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

