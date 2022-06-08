const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    informacion: {
        medidas: {
            peso: "1 kg",
            medida: "1 m"
        },
        fabricacion: {
            pais: "China"
        }
    }
}

// const {nombre, informacion, informacion:{fabricacion, fabricacion : {pais} }} = producto;fabricacion
const {informacion:{fabricacion}} = producto;
const {informacion:{fabricacion:{pais}}} = producto;
//console.log(nombre);
//console.log(informacion);
console.log(fabricacion);
console.log(pais);