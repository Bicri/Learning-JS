//class declaration
class Cliente{

    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const isaac = new Cliente('isaac',400);
console.log(isaac);
console.log(isaac.mostrarInformacion());

console.log(Cliente.bienvenida());

//class expression
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const bicri = new Cliente2('bicri', 500);
console.log(bicri);
console.log(bicri.mostrarInformacion());