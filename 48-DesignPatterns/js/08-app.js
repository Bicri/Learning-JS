

//Mediator

function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) =>{
        console.log(`El articulo ${articulo} inicia con un precio de ${precio}`)
    },
    vendido: (compardor) => {
        console.log(`Vendido a ${compardor}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    ofertar: (cantidad, comprador) => {
        console.log(`${comprador.nombre}: oferta ${cantidad}`)
    }
}

function Subasta(){
    let compardores = {};

    return {
        registrar: usuario=>{
            compardores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }

}



const bicri = new Comprador("Bicri");
const isaac = new Comprador("Isaac");
const vendedor = new Vendedor("Vendedor de autos");


const subasta = new Subasta();
subasta.registrar(bicri)
subasta.registrar(isaac)
subasta.registrar(vendedor)

vendedor.oferta('Mustang 66', 300)
bicri.ofertar(352, bicri);
isaac.ofertar(450, isaac);
bicri.ofertar(500, bicri);
isaac.ofertar(700, isaac);
vendedor.vendido('Isaac');
