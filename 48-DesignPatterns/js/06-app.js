

//Mixin patterb

class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }

}

class Cliente {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInfo(){
        console.log(`Nombre Persona: ${this.nombre} --- Email: ${this.email}`)
    },
    mostrarNombre(){
        console.log(`Mi nombre es: ${this.nombre}`)
    }
}

//Añadir funciones persona a la clase
Object.assign(Persona.prototype, funcionesPersona)
Object.assign(Cliente.prototype, funcionesPersona)

const cliente = new Persona("Bicri", "Correo");

console.log(cliente);
cliente.mostrarInfo();
cliente.mostrarNombre();


const cliente2 = new Cliente("Isaac", "correo");
console.log(cliente2);
cliente2.mostrarInfo();
cliente2.mostrarNombre();