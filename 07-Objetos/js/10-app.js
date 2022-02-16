const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

const medidas = {
    peso: "1 kg",
    medida: "1 m"
}

console.log(producto);
console.log(medidas);

//assign
const result = Object.assign(producto,medidas);
console.log(result);

//spread
const result2 = {...producto,...medidas};
console.log("spread", result2);