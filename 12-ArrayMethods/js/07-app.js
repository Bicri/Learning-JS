const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ["Agosto","Septiembre"];
const meses3 = ["Octubre", "Noviembre"];

const meses4 = meses.concat(meses2, meses3, "Otro mes");
console.log(meses4);


//spread operator
const res = [...meses, ...meses2, ...meses3, "Otro mes"]
console.log(res)
