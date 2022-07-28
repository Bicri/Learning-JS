const cliente = {
    nombre: 'Bicrito',
    balance: 500
};

describe('testing al cliente', ()=>{
    test('Cliente Premium', ()=>{
        expect(cliente.balance).toBeGreaterThan(400);
    })
    test('Es bicrito', ()=>{
        expect(cliente.nombre).toBe("Bicrito");
    })
    test('No es otro cliente', ()=>{
        expect(cliente.nombre).not.toBe("Pedro");
    })
    test('No tiene 500', ()=>{
        expect(cliente.balance).not.toBe(400);
    })
})