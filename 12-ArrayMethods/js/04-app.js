const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let res;

res = carrito.filter( (producto) => { return producto.precio > 400} )

res = carrito.filter( (producto) => { return producto.precio < 600} )

res = carrito.filter( (producto) => { return producto.precio === 100} )

res = carrito.filter( (producto) => { return producto.nombre !== "Audifonos" } )


console.log(res);