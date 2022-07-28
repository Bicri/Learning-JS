

// const cliente = "Isaac";

// function mostrarCliente(){
//     const cliente = "bicri";
//     console.log(cliente);
// }

// console.log("LLamando a global ", cliente);

// mostrarCliente();

const login = true;

function clienteLogueado(){
    const cliente = "Juan";
    console.log(cliente);

    if(login){
        const cliente = "Admin";
        console.log(cliente);
    }
}  

clienteLogueado();