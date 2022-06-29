class Cliente{

    /**
    # significa privada
    
     */

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const bicri = new Cliente('bicri', 500);

// console.log(bicri.#nombre)

console.log(bicri.mostrarInformacion());