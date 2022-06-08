const puntaje = 1000;
const puntaje2 = "1000";

console.log(typeof(puntaje),"-",typeof(puntaje2))
/* != diferente
   == igual a       NO ES ESTRICTO
   ===              ESTRICTO
*/

// if(puntaje != 1000){
//     console.log("si, es diferente");
// }

// if(puntaje === "1000"){
//     console.log("si es igual");
// }else
// {
//     console.log("no krnal");
// }

if(puntaje !== "1000"){
    console.log("si es diferente");
}else
{
    console.log("no krnal");
}