
//object literal
const cliente = {
    nombre: 'Isaac',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


//object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const isaac = new Cliente('Bicri', 500);
console.log(isaac);
//Este ultimo es reutilizable pues se pueden crear múltiples instancias

