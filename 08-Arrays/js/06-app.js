const carrito = [];
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 200
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}
const producto3 = {
    nombre: "Teclado",
    precio: 100
}

let resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado); 
