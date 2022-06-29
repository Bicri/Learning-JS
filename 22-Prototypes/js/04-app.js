function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold'
    }else if(this.saldo > 5000){
        tipo = 'Platinum'
    }else{
        tipo = 'Pobre'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre} - Saldo: ${this.saldo} - Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retiro){
    this.saldo -= retiro;
}




function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

Persona.prototype.mostrarTelefono = function(){
    return `${this.telefono}`;
}

const isaac = new Persona('bicri',500, 5558088128);

console.log(isaac)
console.log(isaac.nombreClienteSaldo())
console.log(isaac.mostrarTelefono())


