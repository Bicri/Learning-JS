
//Explicit binding

function persona(el1, el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: "Isaac"
}

const musciaFavo = ['Heavy','Rock'];


console.log("------- Con call -------------------------")
persona.call(informacion, musciaFavo[0], musciaFavo[1]);

console.log("------- Con apply -------------------------")
persona.apply(informacion, musciaFavo);

console.log("------- Con bind -------------------------");
const nuevaFn = persona.bind(informacion, musciaFavo[0], musciaFavo[1]);
nuevaFn();
