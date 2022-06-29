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

const isaac = new Cliente('Bicri', 500);
isaac.retiraSaldo(1);

console.log(isaac.nombreClienteSaldo());
console.log(isaac.tipoCliente());




