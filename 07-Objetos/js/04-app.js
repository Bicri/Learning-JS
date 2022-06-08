const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

console.log(producto.nombre);
// const nombre = producto.nombre;
// console.log(nombre);


const {nombre,precio} = producto;
// const {precio} = producto;
console.log("Destructuring: ",nombre);
console.log("Destructuring: ",precio);