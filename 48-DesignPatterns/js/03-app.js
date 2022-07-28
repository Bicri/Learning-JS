

//Singleton

let instancia = null;
class Persona {
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        }else{
            return instancia;
        }
    }
}

const persona = new Persona("isaac", "correo");
console.log(persona)

const persona2 = new Persona("bicri", "correo2");
console.log(persona2)