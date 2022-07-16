import  alias, {nombreCliente as nombre, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js';
import { Empresa } from './empresa.js';



// nuevaFuncion(); //Al exportarlo debe estar fuera de las llaves
alias();

console.log(nombre);
console.log(ahorro);
console.log(mostrarInformacion(nombre, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombre, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());




const empresa = new Empresa('baby bracelete', 500, 'TecnoSalud');
console.log(empresa);
console.log(empresa.mostrarInformacion());