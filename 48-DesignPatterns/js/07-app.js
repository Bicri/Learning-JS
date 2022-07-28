

//Namespaces --> organizar codigo

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: "Pizza",
        precio: "25"
    },
    {
        platillo: "Hamburguesa",
        precio: "20"
    },
    {
        platillo: "Hot dog",
        precio: "20"
    }
]


restaurantApp.funciones = {
    mostrarMenu: (platillos) =>{
        console.log(`Bienvenidos al menu`);

        platillos.forEach((platillo,index) => {
            console.log(`${index+1}.- ${platillo.platillo} -- Precio: ${platillo.precio}`)
        });
    },
    ordenar: id =>{
        console.log(`Tu platillo ${restaurantApp.platillos[id-1].platillo} se esta preparando`)
    },
    agregarPlatillo: (platillo, precio) =>{
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
        console.log(`El platillo ${restaurantApp.platillos[restaurantApp.platillos.length-1].platillo} fue agregado`)
    }
}

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);
restaurantApp.funciones.ordenar(2)
restaurantApp.funciones.agregarPlatillo("Bistek", 400);
