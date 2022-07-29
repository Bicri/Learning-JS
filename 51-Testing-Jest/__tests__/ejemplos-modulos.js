import {suma} from '../js/suma.js';

describe('Suma de dos numeros', ()=>{
    test('10+20 = 30', ()=>{
        expect(suma(10,20)).toBe(30);
    })
})