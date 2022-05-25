
//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contendorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners()
function cargarEventListeners(){

    //al presionar boton "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);


    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        articulosCarrito = [];
        limpiarHTML();
    })
}


//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = (e.target.parentElement.parentElement);
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e){

    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');


        //elimina del arreglo
        articulosCarrito = articulosCarrito.filter(curso =>  curso.id !== cursoId );

        carritoHTML(); //Volver a iterar
    }
}

function leerDatosCurso(curso){

    //crear objeto con el contenido del curso actual
    const infoCurso = {
        id : curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
    };

    //Validar si elemento existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe){
        //actualizar la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    }else{
        //agregar curso al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    carritoHTML();

}


//muestra articulos en html
function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso; //destructuring
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" alt="Imagen del carrito" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>

        `;

        //agrega el html del carrito en tbody
        contendorCarrito.appendChild(row);
    })
}

//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma lenta
    // contendorCarrito.innerHTML = '';

    //forma mejorada
    while(contendorCarrito.firstChild){
        contendorCarrito.removeChild(contendorCarrito.firstChild);
    }
}