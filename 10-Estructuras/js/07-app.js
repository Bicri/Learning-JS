const efectivo = 300;
const credito = 400;
const disponible = efectivo+credito;
const total = 600;

if(efectivo>total || credito>total || disponible>total){
    console.log("si se puede pagar");
}else{
    console.log("fondos insuficientes");
}