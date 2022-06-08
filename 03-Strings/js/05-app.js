const producto = 'Monitor de 20 pulgadas';

console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); // ?No jala

console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // ? si jala

console.log(producto.charAt(0));