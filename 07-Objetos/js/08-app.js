"use strict";

const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "Imagen.jpg";

console.log(producto);

console.log(Object.isFrozen(producto));


//CCON MODO ESTRICTO DA ERROR
// x=20;
// console.log(x);