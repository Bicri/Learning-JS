

//weakset --> set debil

const weakset = new WeakSet();

//este solo acepta objetos
const cliente = {
    nombre: 'Isaac',
    saldo: '100'
}

weakset.add(cliente);


const name = 'Yo';
// weakset.add(name); //Error, no es objeto

console.log(weakset.has(cliente));

weakset.delete(cliente);

// console.log(weakset.size); //Esta funcion no existe en weakset
// no son iterables con foreach
console.log(weakset)