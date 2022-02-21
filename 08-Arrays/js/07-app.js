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
const producto4 = {
    nombre: "Celular 2",
    precio: 100
}
carrito.push(producto2);
carrito.push(producto);
carrito.unshift(producto3)
carrito.push(producto4);
console.table(carrito);

// carrito.pop();
// console.table(carrito);

// carrito.shift();
// console.table(carrito);


carrito.splice(1,1);
console.table(carrito);