const enlace = document.createElement('a');

enlace.textContent = 'Nuevo enlace'; //agregando texto
enlace.href = '/nuevo-enlace'; //agregando href
enlace.target = '_blank';
enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase')

enlace.onclick = mifuncion;


const navegacion = document.querySelector('.navegacion');

//Coloca al final de los hijos
//navegacion.appendChild(enlace);


//colocar antes de otro hijo
navegacion.insertBefore(enlace, navegacion.children[1])

function mifuncion(){
    alert('diste click');
}

//crear un card de forma dinámica
const info = document.createElement('div');
info.classList.add('info');

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Imagen de concierto';

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);

//insertando en html
const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card);
contenedor.insertBefore(card, contenedor.children[0])