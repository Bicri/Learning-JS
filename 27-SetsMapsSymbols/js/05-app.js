
//symbols
//propiedad unica

const sym = Symbol('1');

const sym2 = Symbol('1');

if(sym === sym2){
    console.log('Son iguales')
}else{
    console.log('Son diferentes')
}

console.log(sym)
console.log(sym2)


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//agregar symbols como llaves
persona[nombre] = 'bicri';
persona[apellido] = 'Martinez';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona.nombre);
console.log(persona[nombre]);
console.log(persona);

//las propiedades de un symbol no son iterables
for(let i in persona){
    console.log(i)
}

//definir description en symbol

const nombreCliente = Symbol('Nombre del cliente');
const cliente={}

cliente[nombreCliente] = 'Isaac';

console.log(cliente[nombreCliente])
console.log([nombreCliente])
console.log(cliente)

