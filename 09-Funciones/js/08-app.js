function sumar(a,b)
{
    return a+b;
}

const res = sumar(2,5);

console.log(res);



let total =0;

function agregarCarrito(precio)
{
    return total+= precio;
}

function calcularimpuesto(total)
{
    return total *1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalpagar = calcularimpuesto(total);

console.log(total)
console.log(`Total ${totalpagar}`);