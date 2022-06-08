const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


let res ="";
//foreach

carrito.forEach((producto, index) => {
    if(producto.nombre === "Tablet"){
        res = carrito[index];
    }
})
console.log(res);
//find

const res2 = carrito.find( producto => {
    return producto.precio === 100
})
console.log(res2);
