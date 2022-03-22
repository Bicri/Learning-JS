
//Break --> cortar
//Contonue --> detectar algo y seguir

// const carrito = [
//     {nombre: "Monitor de 27 pulgadas", precio: 500},
//     {nombre: "Television", precio: 100},
//     {nombre: "Tablet", precio: 200},
//     {nombre: "Audifonos", precio: 300},
//     {nombre: "Teclado", precio: 400},
//     {nombre: "Celular", precio: 700}
// ]

// for(let i=0; i<carrito.length; i++){
//     console.log(carrito[i].nombre, " ", carrito[i].precio);
// }

// for (let i =0; i<=10; i++){
//     if(i===5){
//         console.log(`Este es el 5`);
//         break;
//     }else
//     {
//         console.log(`${i}`);
//     }
// }

// for (let i =0; i<=10; i++){
//     if(i===5){
//         console.log(`CINCO`);
//         continue;
//     }
//     console.log(`${i}`);
// }

const carrito = [
    {nombre: "Monitor de 27 pulgadas", precio: 500},
    {nombre: "Television", precio: 100},
    {nombre: "Tablet", precio: 200, descuento:true},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
]

for(let i=0; i<carrito.length; i++){
    if(carrito[i].descuento)
    {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i].nombre);
}