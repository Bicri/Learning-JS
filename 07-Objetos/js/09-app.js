"use strict";

const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

Object.seal(producto); //No agrega ni elimina, solo modifica las existentes

producto.disponible = false;
// producto.imagen = "Imagen.jpg";
//  delete(producto.precio);

console.log(producto);

console.log(Object.isSealed(producto));