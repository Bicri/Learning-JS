const autenticado = true;

if (autenticado){
    console.log("Autenticado");
}

const puntaje = 500;


// if (puntaje>300){
//     console.log("buen puntaje");
// }else if(puntaje > 400){
//     console.log("Excelente");
// }


function review(){
    if (puntaje>300){
        console.log("buen puntaje");
        return;
    }
    
    if(puntaje > 400){
        console.log("Excelente");
        return;
    }
}

review();