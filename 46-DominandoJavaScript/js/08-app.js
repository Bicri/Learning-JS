

// window.onload = ()=>{
//     console.log("Ventana Lista");
// }
// self.onload = ()=>{
//     console.log("Ventana Lista");
// }

window.nombre= "Monitor";

const producto = {

    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        return `El producto ${self.nombre} `
    }
}

console.log(producto.mostrarInfo());
