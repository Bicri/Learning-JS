

//Currying y partial


const suma = (a,b,c) => a+b+c;

// const parcial = (a) => (b,c) => suma(a,b,c);

const parcial = (a) =>{
    return (b,c) => {
        return suma(a,b,c)
    }
}

const primerNumero = parcial(5);

const resultado = primerNumero(4,3);

console.log(resultado)

console.log(suma(5,4,3));

//---------------------------------------------------------------------

const parcial2 = a => b => c => suma(a,b,c);

const numA = parcial2(5);
const numB = numA(4);
const resultado2 = numB(3);

console.log(resultado2); 

const resultadoParcial = parcial2(5)(4)(3);
console.log(`Res par=${resultadoParcial}`);