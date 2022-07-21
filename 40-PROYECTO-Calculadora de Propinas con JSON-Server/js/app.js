let cliente = {
    mesa: "",
    hora: "",
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');

btnGuardarCliente.addEventListener('click',guardarCliente);

function guardarCliente(){
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    const camposvacios = [mesa, hora].some(campo => campo === '');

    if(camposvacios){
        if(!document.querySelector('.invalid-feedback')){
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = "Todos los campos son obligatorios";
            document.querySelector('.modal-body form').appendChild(alerta);
    
            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }

    cliente = {...cliente, mesa, hora };
    
    document.querySelector('.modal-body form').reset();

    //ocultar modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    //mostrar las secciones
    mostrarSecciones();

    //Obtener platillos de la API
    obtenerPlatillos();
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => {
        seccion.classList.remove('d-none');
    });
}

function obtenerPlatillos(){
    const url = "http://localhost:4000/platillos";

    fetch(url)
        .then(resolve =>{
            return resolve.json();
        })
        .then(respuesta => {
            mostrarPlatillos(respuesta);
        })
        .catch(reject => {
            console.log(reject)
        })
}

function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {
        const row = document.createElement('div');
        row.classList.add('row','py-3', 'border-top');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3','fw-bold');
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[platillo.categoria];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');
        //funcion que detecta la cantidad y el platillo
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad});
        };
        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    });
}

function agregarPlatillo(producto){

    let {pedido} = cliente; 

    //validar mayor a cero
    if(producto.cantidad > 0){
        //Si ya existe
        if(pedido.some(articulo => articulo.id === producto.id)){
            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id == producto.id){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            //se asigna el nuevo array
            cliente.pedido = [...pedidoActualizado];
        }else{//Si no existe
            cliente.pedido = [...pedido, producto];
        }

    }else{
        //Eliminar elementos cuando cantidad es 0
        const resultados = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultados];
    }

    //Limpiar el html previo
    limpiarHTML();

    if(cliente.pedido.length){
        //Mostrar el resumen
        actualizarResumen();
    }else{
        mensajePedidoVacio();
    }
}

function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');

    //info de la mesa
    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');
    
    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    //info de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');
    
    const horaSpan = document.createElement('span');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    //Padres
    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //Titulo de la sección
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('my-4', 'text-center');

    //Iterar sobre el array de pedidos
    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(plato => {
        const {nombre, cantidad, precio, id} = plato;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        //Cantidad del articulo
        const cantidadEl = document.createElement('p');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';

        const valor = document.createElement('span');
        valor.classList.add('fw-normal');
        valor.textContent = cantidad;

        //Precio
        const precioEl = document.createElement('p');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';

        const valorPrecio = document.createElement('span');
        valorPrecio.classList.add('fw-normal');
        valorPrecio.textContent = `$${precio}`;

        //Subtotal
        const subtotal = document.createElement('p');
        subtotal.classList.add('fw-bold');
        subtotal.textContent = 'Subtotal: ';

        const valorSubtotal = document.createElement('span');
        valorSubtotal.classList.add('fw-normal');
        valorSubtotal.textContent = `$${parseFloat(precio) * parseFloat(cantidad)}`;

        //Boton para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = "Eliminar del pedido";
        btnEliminar.onclick = function (){
            eliminarProducto(id);
        }



        //Agregar valores a sus contenedores
        cantidadEl.appendChild(valor);
        precioEl.appendChild(valorPrecio);
        subtotal.appendChild(valorSubtotal);

        //Agregar elementos al li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotal);
        lista.appendChild(btnEliminar);

        //Agregar lista a grupo principal
        grupo.appendChild(lista);
    }); 

    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    //Mostrar formulario de propinas
    formularioPropinas();
}

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}

function eliminarProducto(id){
    const {pedido} = cliente
    const resultados = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultados];

    //Limpiar el html previo
    limpiarHTML();

    if(cliente.pedido.length){
        //Mostrar el resumen
        actualizarResumen();
    }else{
        mensajePedidoVacio();
    }

    //regresar input a 0
    document.querySelector(`#producto-${id}`).value = 0;

}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = "Añade los elementos del pedido";

    contenido.appendChild(texto);
}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6', 'formulario');

    const divForm = document.createElement('div');
    divForm.classList.add('card', 'py-2', 'px-3', 'shadow');

    const heading = document.createElement('h3');
    heading.classList.add('my-4','text-center');
    heading.textContent = "Propina";

    //Radio button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input');
    radio10.onclick = ()=> calcularPropina();

    const radio10lbl = document.createElement('label');
    radio10lbl.textContent = "10%";
    radio10lbl.classList.add('form-check-label');

    const radio10div = document.createElement('div');
    radio10div.classList.add('form-check');
    radio10div.appendChild(radio10);
    radio10div.appendChild(radio10lbl);

    //Radio button 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input');
    radio25.onclick = ()=>calcularPropina();

    const radio25lbl = document.createElement('label');
    radio25lbl.textContent = "25%";
    radio25lbl.classList.add('form-check-label');

    const radio25div = document.createElement('div');
    radio25div.classList.add('form-check');
    radio25div.appendChild(radio25);
    radio25div.appendChild(radio25lbl);

    //Radio button 25%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = "50";
    radio50.classList.add('form-check-input');
    radio50.onclick = ()=>calcularPropina();

    const radio50lbl = document.createElement('label');
    radio50lbl.textContent = "50%";
    radio50lbl.classList.add('form-check-label');

    const radio50div = document.createElement('div');
    radio50div.classList.add('form-check');
    radio50div.appendChild(radio50);
    radio50div.appendChild(radio50lbl);


    //agregar aal div principal
    divForm.appendChild(heading);
    divForm.appendChild(radio10div);
    divForm.appendChild(radio25div);
    divForm.appendChild(radio50div);

    //Agregar al formulario
    formulario.appendChild(divForm);

    contenido.appendChild(formulario);
}

function calcularPropina(){
    let subtotal = 0;
    const {pedido} = cliente;

    //calcular el subtotal
    pedido.forEach(articulo => {
        subtotal += (articulo.cantidad * articulo.precio);
    });

    //seleccionar radiobutton
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;
    

    //calcular la propina
    const propina = ((subtotal * parseInt(propinaSeleccionada))/100);

    //Calcular el total a pagar
    const total = subtotal+propina;
    console.log(total);

    mostrarTotalHTML(subtotal, total, propina);

}

function mostrarTotalHTML(subtotal, total, propina){

    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar', 'my-5');

    //subtotal
    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subtotalParrafo.textContent = "Subtotal Consumo: ";

    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    //Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = "Propina: ";

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    //Total
    const totalParrafo = document.createElement('p');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = "Total: ";

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);


    //Eliminar Resultado
    if(document.querySelector('.total-pagar')){
        document.querySelector('.total-pagar').remove();
    }

    //Agregando al div
    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    document.querySelector('.formulario > div').appendChild(divTotales);
}