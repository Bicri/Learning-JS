
//Constructor pattern

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }

}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}


const cliente = new Cliente("Isaac", "correo", "IPN");

console.log(cliente);