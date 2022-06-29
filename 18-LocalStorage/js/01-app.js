
//NO SE PUEDE GUARDAR ARREGLOS NI OBJETOS
localStorage.setItem('nombre', 'Bicri');

sessionStorage.setItem('nombre','Isaac');

const producto = {
    nombre: 'Monitor 24 ',
    precio: 300
};

const productoString = JSON.stringify(producto);

console.log(productoString)

localStorage.setItem('producto', productoString);

const meses = ['Enero','Febrero', 'Marzo','Abril'];

localStorage.setItem('meses', JSON.stringify(meses));