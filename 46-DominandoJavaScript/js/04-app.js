

//Implicit Binding

const usuario = {
    nombre: "Isaac",
    edad: 23,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} anios`);
    },
    mascota: {
        nombre: "Carlitos",
        edad: 2,
        informacion(){
            console.log(`Mi perro es ${this.nombre} y tiene ${this.edad} anios`)
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();