
//const meses = ["Enero", "Febrero", "Marzo"];

//meses[3] = "Abril";

//Agregar al final del arreglo
// meses.push("Abril");
// meses.push("Mayo");



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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3)

console.table(carrito);
