const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

//console.log(producto.nombre);
// const nombre = producto.nombre;
// console.log(nombre);


const {nombre} = producto;
console.log(nombre);


//Destructuring arrays
const numeros = [10,20,30,40,50];

// const [a,b,c] = numeros;
// console.log(c);
const [a,,c] = numeros
console.log(a);
console.log(c);

const [primero, segundo, ...tercero] = numeros;
console.log(tercero);