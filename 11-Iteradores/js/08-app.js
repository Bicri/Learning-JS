const pendientes =["tarea", "Comer", "Proyecto", "esrudiar js"];


const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
];

const automovil = {
    modelo: "camaro",
    year: 1969,
    motor: "6.0"
}

for(let propiedad in automovil){
    console.log(propiedad);
}
console.log("---TEMPLATE STRING---")
for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

// FOR OF SOBRE OBJETOS
console.log("---FOR OF SOBRE OBJETOS---")
for(let [llave, valor] of Object.entries(automovil)){
    console.log(`${llave} : ${ valor}`)
}

//FOR IN ITERA SOBRE ARREGLOS