const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
]

// for(let i=0; i < carrito.length; i++)
// {
//     console.log(`${carrito[i].nombre} = $${carrito[i].precio}`);
// }

const paraMAP =carrito.map(function(producto){
    return `${producto.nombre} = $${producto.precio}`;
})

const paraFOREACH = carrito.forEach(function(producto){
    return `${producto.nombre} = $${producto.precio}`;
})

console.log(paraMAP);
console.log(paraFOREACH);