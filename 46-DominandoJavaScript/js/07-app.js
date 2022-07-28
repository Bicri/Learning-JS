

console.log("Primero");

setTimeout(() => {
    console.log("segundo")
}, 0);

console.log("Tercero");

setTimeout(() => {
    console.log("cuarto");
}, 0);


new Promise(function(resolve){
    resolve("Desconocido...")
}).then(console.log)

console.log("Ultimo")

function hola(){
    console.log("hola");
}

hola();