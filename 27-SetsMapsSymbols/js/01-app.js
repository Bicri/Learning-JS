

const carrito = new Set();


//agregar elementos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); //No la agrega
carrito.add('camisa'); //Es case sensitive


console.log(carrito.size);

//comprobar que existe
console.log(carrito.has('Camisa'));

//Borrar
carrito.delete('Disco #3');

// carrito.clear(); //Borra todo

carrito.forEach(producto => {
    console.log(producto);
})


//set solo amacena valores --> estos son sus indices
carrito.forEach( (producto, index, own) => {
    console.log(index);
    // console.log(own); //todo el set completo
})


console.log(carrito);

//ejemplo
console.log('--------------------------')

const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(`arreglo ${numeros}`);
console.log(noDuplicados);