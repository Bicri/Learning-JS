//Maps, listas ordenadas en llave y valor
//su llave y valor puede ser cualquier tipo de dato

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);
cliente.set([0], true);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));

cliente.delete('saldo');

cliente.clear();


console.log(cliente)

console.log('--------------------')

const paciente = new Map( [ ['Nombre','isaac'], ['cuarto', 'no definido'] ] );

paciente.set('dr', 'Dr asignado')
paciente.set('Nombre', 'bicri')

console.log(paciente)


paciente.forEach(datos => {
    console.log(datos)
})
paciente.forEach((datos, index) => {
    console.log(index)
})