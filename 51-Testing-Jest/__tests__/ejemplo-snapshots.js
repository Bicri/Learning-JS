const cliente = {
    nombre: "Isaac 2",
    balance: 500,
    tipo: "Premium"
}

describe('testing al cliente', ()=>{
    test('Es el Isa', ()=>{
        expect(cliente).toMatchSnapshot()
    });

   
})