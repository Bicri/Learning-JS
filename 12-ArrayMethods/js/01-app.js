const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//INCLUDES COMMRUEBA SI UN VALOR EXISTE EN UN ARREGLO SIMPLE
const resultado = meses.includes("Enero");
console.log(resultado);

//SOME COMPRUEBA SI EXISTE EN UN ARREGLO DE OBJETOS
const existe = carrito.some((producto)=>{
    return producto.nombre === "Celular";
})
console.log(existe);
//SOME TAMBIEN FUNCIONA EN UN ARREGLO SIMPLE
const existe2 = meses.some((mes)=>{
    return mes === "Febrero";
})
console.log(existe2);