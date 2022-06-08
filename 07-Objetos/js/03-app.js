const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

//Add properties to object
producto.imagen = "Imagen.jpg"

console.log(producto);


//eliminar propiedades
delete(producto.disponible);

console.log(producto);