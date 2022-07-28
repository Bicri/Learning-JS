


obtenerCliente('Isaac');

//Function declaration --> puede estar declarada antes o despues de la llamada
function obtenerCliente(nombre){
    console.log(nombre);
}

obtenerCliente('Bicri');

console.log("----------------------------------------------")


// obtenerCliente2("Naye"); // --> antes de definir no funciona 

//Function expression --> primero se definen, luego se usan
const obtenerCliente2 = function(nombre){
    console.log(nombre)
}

obtenerCliente2("Chuncu");





