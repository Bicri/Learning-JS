const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado)


//inner text --> no encontrará texto oculto con visibility:hidden
console.log(encabezado.innerText)

//text content 
console.log(encabezado.textContent) // si encuentra hidden


//inner html --> trae el html
console.log(encabezado.innerHTML)


//encadenamiento, cuando llamas a una propiedad document.querySelector('.contenido-hero h1').textContent

document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading'


const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'