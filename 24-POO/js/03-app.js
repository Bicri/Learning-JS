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

//herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return `Bienvenido al cajero de empresas`;
    }
}

const bicri = new Cliente('bicri', 500);
const empresa =  new Empresa('Space X', 700, 5558088128, "tech");

console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());