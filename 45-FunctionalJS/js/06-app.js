//funciones puras o pure functions

//retorna un dato sin modificar los valores de las variables (dato nuevo)


const numero1 = 20;

const duplicar = numero => numero*2;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);