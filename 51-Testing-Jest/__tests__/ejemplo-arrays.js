const carrito = ['producto 1', 'producto 2', 'producto 3'];

describe('testing al carrito', ()=>{
    test('Array con 3 elementos', ()=>{
        expect(carrito).toHaveLength(3);
    })
    test('Carrito no vacio', ()=>{
        expect(carrito).not.toHaveLength(0);
    })
})