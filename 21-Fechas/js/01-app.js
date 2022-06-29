let diaHoy = new Date();
diaHoy = new Date ('03-12-1999'); //mm-dd-aaaa
diaHoy = new Date('January 5 2000')
diaHoy  = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear(); //año actual
valor = diaHoy.getMonth(); //mes actual --> numero (desde cero)
valor = diaHoy.getDay(); //dia de la semana en numero
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); //milisegundos desde el 1 de enero de 1970 hasta la fecha

console.log(valor);